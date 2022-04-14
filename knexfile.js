// Update with your config settings.

require("dotenv").config({ path: "./.env.local" });

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "better-sqlite3",
    connection: {
      filename: "./fueltracker.sqlite",
    },
    useNullAsDefault: true,
    seeds: {
      directory: "./seeds",
    },
  },

  staging: {
    client: "better-sqlite3",
    connection: {
      filename: "./fueltracker.sqlite",
    },
    useNullAsDefault: true,
    seeds: {
      directory: "./seeds",
    },
  },

  production: {
    client: "better-sqlite3",
    connection: {
      filename: "./fueltracker.sqlite",
    },
    useNullAsDefault: true,
    seeds: {
      directory: "./seeds",
    },
  },
};
