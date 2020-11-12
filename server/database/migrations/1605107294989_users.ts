import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Users extends BaseSchema {
  protected tableName = "users";

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments("id");
      table
        .integer("company_id")
        .unsigned()
        .nullable()
        .references("id")
        .inTable("companies")
        .onDelete("SET NULL")
        .onUpdate("CASCADE");
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable();
      table.string("cnpj").notNullable();
      table.string("cnae").notNullable();
      table.string("remember_me_token").nullable();
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
