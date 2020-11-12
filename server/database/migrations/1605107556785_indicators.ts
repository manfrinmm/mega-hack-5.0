import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Indicators extends BaseSchema {
  protected tableName = "indicators";

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments("id");
      table.specificType("name", "text").notNullable();
      table.string("slug").notNullable();
      table.text("description").notNullable();
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
