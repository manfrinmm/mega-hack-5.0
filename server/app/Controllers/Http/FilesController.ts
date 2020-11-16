import Application from "@ioc:Adonis/Core/Application";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";
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

    let parse;

    try {
      parse = fs.createReadStream(csvPath).pipe(
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
    } catch (error) {
      throw new AppError("Erro ao ler o arquivo. Favor, tente novamente!");
    }

    const transactions = datas.map(transaction => {
      const year = transaction.date.split("/")[2] as string;

      const fullYear = year.length < 4 ? `20${year}` : year;

      const reference_month = `${transaction.date.split("/")[1]}/${fullYear}`;

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

    var registered = {};

    await Database.transaction(async trx => {
      try {
        registered = await Promise.all(
          months.map(async month => {
            const balance = await Balance.firstOrCreate(
              {
                reference_month: month[0],
                user_id: auth.user?.id,
              },
              {
                gross_revenue: 0,
                percentage_of_taxes: 0,
                total_spend: 0,
                user_id: auth.user?.id,
              },
              { client: trx },
            );

            balance.useTransaction(trx);

            await balance.related("transactions").createMany(month[1] as any);

            return balance;
          }),
        );

        await trx.commit();
      } catch (error) {
        await trx.rollback();

        console.log(error);

        throw new AppError("Erro ao cadastrar");
      }
    });

    return registered;
  }
}
