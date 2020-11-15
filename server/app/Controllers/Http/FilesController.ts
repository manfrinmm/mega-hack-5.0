import Application from "@ioc:Adonis/Core/Application";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import AppError from "App/Exceptions/AppError";
import Balance from "App/Models/Balance";
import crypto from "crypto";
import csv from "csv-parse/lib";
import fs from "fs";

export default class FilesController {
  public async store({ request, auth }: HttpContextContract) {
    const file = request.file("file", {
      size: "8mb",
      extnames: ["csv"],
    });

    const datas: any[] = [];

    if (!file) {
      throw new AppError("Arquivo necessário");
    }

    if (!file.isValid) {
      throw new AppError("Arquivo não suportado");
    }

    const hex = crypto.randomBytes(16).toString("hex");

    await file.move(Application.tmpPath(), {
      name: `${hex}.${file.extname}`,
    });

    const csvPath = file.filePath;

    if (!csvPath) {
      throw new AppError("Falha ao salvar arquivo no servidor");
    }

    const parse = fs.createReadStream(csvPath).pipe(
      csv({
        delimiter: ";",
        columns: ["description", "value", "date"],
        from_line: 2,
        trim: true,
      }),
    );

    parse.on("data", (raw: any) => {
      datas.push(raw);
    });

    await new Promise(resolve => parse.on("end", resolve));

    // remover o arquivo depois de lido
    await fs.promises.unlink(csvPath);

    const transactions = datas.map(transaction => {
      const reference_month = `${transaction.date.split("/")[1]}/${
        transaction.date.split("/")[2]
      }`;

      return {
        name: transaction.description,
        value: Number(transaction.value),
        day_register_at: Number(transaction.date.split("/")[0]),
        reference_month,
      };
    });

    const transactions_group_by_month = transactions.reduce(
      (accumulator, transaction) => {
        const key = transaction["reference_month"];

        if (!accumulator[key]) {
          accumulator[key] = [];
        }

        accumulator[key].push({
          name: transaction.name,
          value: transaction.value,
          day_register_at: transaction.day_register_at,
        });

        return accumulator;
      },
      {},
    );

    const months = Object.entries(transactions_group_by_month);

    const registered = await Promise.all(
      months.map(async month => {
        console.log(month[1]);
        const balance = await Balance.firstOrCreate(
          {
            reference_month: month[0],
          },
          {
            gross_revenue: 0,
            percentage_of_taxes: 0,
            total_spend: 0,
            user_id: auth.user?.id,
          },
        );

        balance.related("transactions").createMany(month[1] as any);
        return balance;
      }),
    );

    return registered;

    // return { file, transactions_formatted, transactions };
  }
}
