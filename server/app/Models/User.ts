import Hash from "@ioc:Adonis/Core/Hash";
import {
  BaseModel,
  beforeSave,
  column,
  HasMany,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

import Balance from "./Balance";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public company_id?: number;

  @column()
  public name: string;

  @column()
  public email: string;

  @column()
  public password: string;

  @column()
  public cnpj: string;

  @column()
  public cnae: string;

  @column()
  public remember_me_token?: string;

  @hasMany(() => Balance, {
    foreignKey: "user_id",
  })
  public balances: HasMany<typeof Balance>;

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}
