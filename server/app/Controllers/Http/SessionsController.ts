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

    const userWithoutPassword = {
      id: user?.id,
      company_id: user?.company_id,
      name: user?.name,
      email: user?.email,
      cnpj: user?.cnpj,
      cnae: user?.cnae,
      remember_me_token: user?.remember_me_token,
      created_at: user?.created_at,
      updated_at: user?.updated_at,
    };
    return { token, user: userWithoutPassword };
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
