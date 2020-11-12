import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import AppError from "App/Exceptions/AppError";
import Balance from "App/Models/Balance";

export default class BalancesController {
  public async index({ request, auth }: HttpContextContract) {
    const { reference_month } = request.get();

    const user = auth.user;

    if (!user) {
      throw new AppError("User not found");
    }

    const balance = await Balance.query()
      .where("reference_month", reference_month)
      .where("user_id", user.id)
      .preload("transactions");

    return balance;
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

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
