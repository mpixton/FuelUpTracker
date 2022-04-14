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
    client: process.env.DB_FLAVOR,
    connection: {
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
