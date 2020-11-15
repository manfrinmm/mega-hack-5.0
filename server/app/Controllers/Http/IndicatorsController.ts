import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import Indicator from "App/Models/Indicator";
import slugify from "App/utils/slugfy";

export default class IndicatorsController {
  public async index({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const schemaValidation = schema.create({
      name: schema.string(),
      description: schema.string(),
    });

    const { name, description } = await request.validate({
      schema: schemaValidation,
    });

    const slug = slugify(name);

    const indicator = await Indicator.create({
      name,
      description,
      slug,
    });

    return indicator;
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
