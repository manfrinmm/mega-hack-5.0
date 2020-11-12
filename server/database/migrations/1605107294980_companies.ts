import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Companies extends BaseSchema {
  protected tableName = "companies";

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments("id");
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable();
      table.string("cnpj").notNullable();
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
