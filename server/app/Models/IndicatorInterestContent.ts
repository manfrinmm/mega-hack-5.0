import { BaseModel, column, hasOne, HasOne } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

import Indicator from "./Indicator";
import InterestContent from "./InterestContent";

export default class IndicatorInterestContent extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public indicator_id: number;

  @column()
  public interest_content_id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasOne(() => Indicator)
  public indicator: HasOne<typeof Indicator>;

  @hasOne(() => InterestContent)
  public interest_content: HasOne<typeof InterestContent>;
}
