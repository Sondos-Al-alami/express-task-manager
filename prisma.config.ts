require("dotenv/config");

const { defineConfig, env } = require("prisma/config");

const databaseUrl = env("DATABASE_URL");

module.exports = defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: databaseUrl,
  },
});
