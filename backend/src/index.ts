import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import jwt from "jsonwebtoken";
import express from "express";
import typeDefs from "./types";
import resolvers from "./resolvers";

import { createTypeormConn } from "./utils/createTypeormConn";
import { createServer } from "http";
import { ApolloServer, AuthenticationError } from "apollo-server-express";
import { firebaseAdmin } from "./utils/firebase";

const startServer = async () => {
  const app = express();

  app.use(cors());

  app.use(morgan("dev"));

  await createTypeormConn();

  // const getMe = async idToken => {
  //   try {
  //     const result = await firebaseAdmin.auth().verifyIdToken(idToken);
  //     return result;
  //   } catch (error) {
  //     console.log(error, "error");
  //   }
  // };

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
    }
    // context: async ({ req }) => {
    //   const idToken = req.headers.authorization || "";
    //   const noBearer = idToken.replace("Bearer ", "");

    //   const user = await getMe(noBearer);
    //   console.log(user);
    //   // return { user };
    // }
  });

  server.applyMiddleware({ app, path: "/graphql" });

  const isTest = !!process.env.TEST_DATABASE;
  const isProduction = !!process.env.DATABASE_URL;
  const port = process.env.PORT || 4000;

  const httpServer = createServer(app);
  httpServer.listen({ port }, (): void =>
    console.log(`🚀 GraphQL is now running on http://localhost:${port}/graphql`)
  );
};

startServer();
