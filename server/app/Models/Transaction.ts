import Database from "@ioc:Adonis/Lucid/Database";
import { BaseModel, beforeSave, column } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

import Balance from "./Balance";

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

  @beforeSave()
  public static async register_values_on_balance(transaction: Transaction) {
    const value = transaction.value;

    if (value) {
      const balance = await Balance.find(transaction.balance_id);

      if (balance) {
        // return transaction;

        if (value > 0) {
          balance.gross_revenue += value;
        } else {
          balance.total_spend += value;
        }

        await balance.save();
      }
    }
  }
}
