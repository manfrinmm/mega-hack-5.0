import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import Balance from "App/Models/Balance";

export default class TransactionsController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const schemaValidation = schema.create({
      name: schema.string(),
      value: schema.number(),
      day_register_at: schema.number(),
    });

    const { name, day_register_at, value } = await request.validate({
      schema: schemaValidation,
    });

    const id = request.param("balance_id");

    const balance = await Balance.findOrFail(id);

    await balance.preload("transactions");

    const transaction = await balance.related("transactions").create({
      name,
      day_register_at,
      value,
    });

    return transaction;
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
