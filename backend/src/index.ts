import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import typeDefs from "./types";
import resolvers from "./resolvers";
import connectDb from "./utils/connectDb";
import admin from "./utils/firebase";

import { ApolloServer } from "apollo-server-express";

const startServer = async () => {
  const app = express();

  app.use(cors());

  app.use(morgan("dev"));

  const getMe = async idToken => {
    try {
      const result = await admin.auth().verifyIdToken(idToken);
      return result;
    } catch (error) {
      console.log(error, "error");
    }
  };

  const server = new ApolloServer({
    introspection: true,
    playground: true,
    typeDefs,
    resolvers,
    formatError: error => {
      // remove the internal sequelize error message
      // leave only the important validation error
      const message = error.message
        .replace("SequelizeValidationError: ", "")
        .replace("Validation error: ", "");

      return {
        ...error,
        message
      };
    },
    context: async ({ req }) => {
      const idToken = req.headers.authorization || "";
      const noBearer = idToken.replace("Bearer ", "");
      const user = noBearer ? await getMe(noBearer) : null;
      return { user };
    }
  });

  server.applyMiddleware({ app, path: "/graphql" });

  const port = process.env.PORT || 4000;

  await connectDb();
  console.log("mongoose connected...");

  await app.listen({ port }, (): void =>
    console.log(`🚀 GraphQL is now running on http://localhost:${port}/graphql`)
  );
};

module.exports = startServer();
