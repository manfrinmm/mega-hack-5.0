import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

import InterestContent from "./InterestContent";

export default class Indicator extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public slug: string;

  @column()
  public description: string;

  @hasMany(() => InterestContent, {
    foreignKey: "indicator_id",
  })
  public interestContents: HasMany<typeof InterestContent>;

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime;
}
