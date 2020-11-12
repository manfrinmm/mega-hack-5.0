import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Balances extends BaseSchema {
  protected tableName = "balances";

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments("id");
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.string("reference_month").notNullable();
      table.float("gross_revenue").notNullable();
      table.float("percentage_of_taxes").notNullable();
      table.float("total_spend").notNullable();
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
