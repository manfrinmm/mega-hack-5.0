import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import AppError from "App/Exceptions/AppError";
import User from "App/Models/User";

export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const schemaValidation = schema.create({
      name: schema.string(),
      email: schema.string(),
      password: schema.string({}),
      cnpj: schema.string(),
    });

    const data = await request.validate({
      schema: schemaValidation,
    });

    const emailAlreadyUsed = await User.findBy("email", data.email);

    if (emailAlreadyUsed) {
      throw new AppError("E-mail já utilizado");
    }

    const user = await User.create({ ...data, cnae: "não sei ainda" });

    return user;
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
