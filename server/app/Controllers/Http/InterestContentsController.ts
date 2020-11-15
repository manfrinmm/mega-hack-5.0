import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import InterestContent from "App/Models/InterestContent";

export default class InterestContentsController {
  public async index({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const schemaValidation = schema.create({
      name: schema.string(),
      indicators_id: schema.array().members(schema.number()),
      color: schema.string(),
      link: schema.string(),
    });

    const { color, indicators_id, link, name } = await request.validate({
      schema: schemaValidation,
    });

    const interest_content = await InterestContent.create({
      name,
      color,
      link,
    });

    const indicator_interest_contents = indicators_id.map(item => ({
      indicator_id: item,
      interest_content_id: interest_content.id,
    }));

    await interest_content
      .related("IndicatorInterestContents")
      .createMany(indicator_interest_contents);

    return interest_content;
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
