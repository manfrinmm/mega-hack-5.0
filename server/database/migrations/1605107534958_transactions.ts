import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Transactions extends BaseSchema {
  protected tableName = "transactions";

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments("id");
      table
        .integer("balance_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("balances")
        .onDelete("SET NULL")
        .onUpdate("CASCADE");
      table.string("name").notNullable();
      table.specificType("value", "real").notNullable();
      table.integer("day_register_at").notNullable();

      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
