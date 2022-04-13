/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("car").del();
  await knex("car").insert([
    {
      car_id: 0,
      name: "Doc Hudson",
      model: "Hornet",
      make: "Hudson",
      year: "1951",
    },
    {
      car_id: 1,
      name: "Lightning McQueen",
      model: "Chevrolet",
      make: "Camaro",
      year: "2005",
    },
    {
      car_id: 2,
      name: "Sally Carrera",
      model: "911",
      make: "Porsche",
      year: "2002",
    },
    {
      car_id: 3,
      name: "Mater",
      model: "l-170",
      make: "International Harvester",
      year: "1951",
    },
  ]);
};
