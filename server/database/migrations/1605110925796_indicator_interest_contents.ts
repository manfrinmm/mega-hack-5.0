import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class IndicatorInterestContents extends BaseSchema {
  protected tableName = "indicator_interest_contents";

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments("id");
      table
        .integer("indicator_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("indicators")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("interest_content_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("interest_contents")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
