const NODE_ENV = process.env.NODE_ENV || "production";

if (NODE_ENV !== "production") {
  module.exports = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    database: "revhere_development",
    username: "postgres",
    password: "password",
    synchronize: true,
    entities: ["src/models/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/models",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
    }
  };
} else {
  module.exports = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    entities: ["src/models/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/models",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
    }
  };
}
