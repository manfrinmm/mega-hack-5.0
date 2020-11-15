import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import AppError from "App/Exceptions/AppError";
import Balance from "App/Models/Balance";

export default class BalancesController {
  public async index({ auth }: HttpContextContract) {
    const user = auth.user;

    if (!user) {
      throw new AppError("User not found");
    }

    var balances = await Balance.query()
      .where("user_id", user.id)
      .preload("transactions");

    if (!balances) {
      return balances;
    }

    const balances_formatted = balances.map(balance => {
      const {
        transactions_gross_revenue,
        transactions_total_spend,
      } = balance.transactions.reduce(
        (accumulator, transaction) => {
          if (transaction.value > 0) {
            accumulator.transactions_gross_revenue += transaction.value;
          } else {
            accumulator.transactions_total_spend -= transaction.value;
          }

          return accumulator;
        },
        {
          transactions_gross_revenue: 0,
          transactions_total_spend: 0,
        },
      );

      const balance_formatted = {
        id: balance.id,
        user_id: balance.user_id,
        reference_month: balance.reference_month,
        gross_revenue: balance.gross_revenue,
        percentage_of_taxes: balance.percentage_of_taxes,
        total_spend: balance.total_spend,
        created_at: balance.created_at,
        updated_at: balance.updated_at,
      };

      return {
        ...balance_formatted,
        transactions_gross_revenue,
        transactions_total_spend,
      };
    });

    return balances_formatted;
  }

  public async store({ request, auth }: HttpContextContract) {
    const user = auth.user;

    if (!user) {
      throw new AppError("User not found");
    }

    const schemaValidation = schema.create({
      reference_month: schema.string(),
      gross_revenue: schema.number(),
      percentage_of_taxes: schema.number(),
      total_spend: schema.number(),
    });

    const {
      gross_revenue,
      percentage_of_taxes,
      reference_month,
      total_spend,
    } = await request.validate({ schema: schemaValidation });

    await user.preload("balances");

    const balanceAlreadyExists = user.balances.find(balance => {
      return balance.reference_month === reference_month;
    });

    if (balanceAlreadyExists) {
      throw new AppError("Balance already exists");
    }

    const balance = await user.related("balances").create({
      user_id: user.id,
      gross_revenue,
      percentage_of_taxes,
      reference_month,
      total_spend,
    });

    return balance;
  }

  public async show({ request, auth }: HttpContextContract) {
    const { reference_month } = request.get();

    const user = auth.user;

    if (!user) {
      throw new AppError("User not found");
    }

    var balance = await Balance.query()
      .where("reference_month", reference_month)
      .where("user_id", user.id)
      .preload("transactions")
      .first();

    if (!balance) {
      return balance;
    }

    const {
      transactions_gross_revenue,
      transactions_total_spend,
    } = balance.transactions.reduce(
      (accumulator, transaction) => {
        if (transaction.value > 0) {
          accumulator.transactions_gross_revenue += transaction.value;
        } else {
          accumulator.transactions_total_spend -= transaction.value;
        }

        return accumulator;
      },
      {
        transactions_gross_revenue: 0,
        transactions_total_spend: 0,
      },
    );

    return {
      ...balance.toJSON(),
      transactions_gross_revenue,
      transactions_total_spend,
    };
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
