/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex, promise) {
  await knex.into(knex.raw("car (name)")).insert((builder) => {
    builder.select("car").distinct().from("fuelup");
  });
  await knex.schema.alterTable("fuelup", (table) => {
    table.integer("car_id").references("car_id").inTable("car");
  });
  await knex.from("fuelup").update({
    car_id: knex
      .from("car")
      .select("car_id")
      .where("name", knex.raw("??", ["fuelup.car"])),
  });
  await knex.schema.alterTable("fuelup", (table) => {
    table.dropColumn("car");
    table.integer("car_id").notNullable().alter();
  });
  return promise;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex, promise) {
  await knex.schema.alterTable("fuelup", (table) => {
    table.string("car");
  });
  await knex.from("fuelup").update({
    car: knex
      .from("car")
      .select("name")
      .where("car_id", knex.raw("??", ["fuelup.car_id"])),
  });
  await knex.schema.alterTable("fuelup", (table) => {
    table.dropForeign("car_id");
    table.dropColumn("car_id");
  });
  await knex("car").del();
  return promise;
};
