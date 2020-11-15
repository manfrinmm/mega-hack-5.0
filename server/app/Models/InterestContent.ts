import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

import IndicatorInterestContent from "./IndicatorInterestContent";

export default class InterestContent extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public color: string;

  @column()
  public link: string;

  @hasMany(() => IndicatorInterestContent, {
    foreignKey: "interest_content_id",
  })
  public IndicatorInterestContents: HasMany<typeof IndicatorInterestContent>;

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime;
}
