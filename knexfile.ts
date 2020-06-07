require("dotenv").config();

module.exports = {
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
    pool: {
      min: 5,
      max: 10,
    },
  },

  development: {
    client: "postgres",
    connection: {
      //port: process.env.DATABASE_PORT,
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10,
    },
  },
};
