/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex, Promise) {
  return knex.schema.createTable("car", (table) => {
    table.increments("car_id");
    table.string("name").notNullable();
    table.string("make");
    table.string("model");
    table.string("year");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("car");
};
