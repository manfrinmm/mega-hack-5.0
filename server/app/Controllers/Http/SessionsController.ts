import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";

export default class SessionsController {
  public async index({}: HttpContextContract) {}

  public async store({ request, auth }: HttpContextContract) {
    const schemaValidator = schema.create({
      email: schema.string(),
      password: schema.string(),
    });

    const { email, password } = await request.validate({
      schema: schemaValidator,
    });

    const token = await auth.attempt(email, password, {
      expiresIn: "1 days",
    });

    var user = auth.user;

    // Precisa remover a password
    return { token, user };
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
