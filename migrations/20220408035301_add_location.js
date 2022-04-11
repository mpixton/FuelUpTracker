/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex, promise) => {
  await knex.schema.alterTable("fuelup", (table) => {
    table.string("city");
    table.string("state");
    table.string("vendor");
  });
  return promise;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex, promise) => {
  await knex.schema.alterTable("fuelup", (table) => {
    table.dropColumn("city");
    table.dropColumn("state");
    table.dropColumn("vendor");
  });
  return promise;
};
