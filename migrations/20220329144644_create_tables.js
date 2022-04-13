/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex, promise) => {
  await knex.schema.createTable("car", (table) => {
    table.increments("car_id");
    table.string("name");
    table.string("make");
    table.string("model");
    table.string("year");
  });

  await knex.schema.createTable("fuelup", (table) => {
    table.increments("fuelup_id");
    table.float("trip", 6, 1);
    table.float("gallons", 5, 3);
    table.float("price", 5, 3);
    table.float("total", 6, 2);
    table.integer("odometer");
    table.date("date");
    table.string("city");
    table.string("state");
    table.string("vendor");
    table.integer("car_id").references("car_id").inTable("car");
  });
  return promise;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex, Promise) {
  return knex.schema.dropTable("fuelup");
};
