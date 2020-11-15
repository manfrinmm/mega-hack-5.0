import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import AppError from "App/Exceptions/AppError";
import Balance from "App/Models/Balance";

export default class GestaoController {
  public async index({ request, auth }: HttpContextContract) {
    const { reference_month } = request.get();

    const user = auth.user;

    if (!user) {
      throw new AppError("User not found");
    }

    var balance = await Balance.query()
      .where("reference_month", reference_month)
      .where("user_id", user.id)
      .preload("transactions", transactions => {
        transactions.orderBy("created_at", "desc");
      })
      .first();

    const grouped_by_days = await balance?.transactions.reduce(
      (accumulator, transaction) => {
        const key = transaction["day_register_at"];

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
    const days = Object.entries(grouped_by_days);
    const results = [];

    days.forEach(day => {
      const array = {
        day: day[0],
        total_spend: 0,
        gross_revenue: 0,
        total: 0,
      };

      const values = day[1].reduce(
        (accumulator, transaction) => {
          if (transaction.value > 0) {
            accumulator.entries += transaction.value;
          } else {
            const converted_value = -1 * transaction.value;
            accumulator.spend += converted_value;
          }

          return accumulator;
        },
        {
          spend: 0,
          entries: 0,
          total: 0,
        },
      );
      array.total_spend = values.spend;
      array.gross_revenue = values.entries;
      array.total = values.entries - values.spend;

      results.push(array);
    });

    return results;
  }
}
