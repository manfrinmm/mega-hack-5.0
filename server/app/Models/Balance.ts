import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

import Transaction from "./Transaction";

export default class Balance extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public user_id: number;

  @column()
  public reference_month: string;

  @column()
  public gross_revenue: number;

  @column()
  public percentage_of_taxes: number;

  @column()
  public total_spend: number;

  @hasMany(() => Transaction, {
    foreignKey: "balance_id",
  })
  public transactions: HasMany<typeof Transaction>;

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime;
}
