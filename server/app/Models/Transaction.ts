import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public balance_id: number;

  @column()
  public name: string;

  @column()
  public value: number;

  @column()
  public day_register_at: number;

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime;
}
