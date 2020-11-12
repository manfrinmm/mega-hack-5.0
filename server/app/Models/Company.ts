import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

import User from "./User";

export default class Company extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public email: string;

  @column()
  public password: string;

  @column()
  public cnpj: string;

  @hasMany(() => User, {
    foreignKey: "company_id",
  })
  public users: HasMany<typeof User>;

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime;
}
