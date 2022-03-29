/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex, Promise) {
  return knex.schema.createTable("fuelup", (table) => {
    table.increments("fuelup_id");
    table.string("car").notNullable();
    table.float("trip", 6, 1);
    table.float("gallons", 5, 3);
    table.float("price", 5, 3);
    table.float("total", 6, 2);
    table.integer("odometer");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex, Promise) {
  return knex.schema.dropTable("fuelup");
};
