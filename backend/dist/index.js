"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const typeorm_1 = require("typeorm");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const apollo_server_express_1 = require("apollo-server-express");
const types_1 = __importDefault(require("./types"));
const resolvers_1 = __importDefault(require("./resolvers"));
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    app.use(cors_1.default());
    app.use(morgan_1.default("dev"));
    // const getMe = async req => {
    //   const auth = req.headers && req.headers.authorization || '';
    //   if (token) {
    //     try {
    //       return await jwt.verify(token, process.env.SECRET);
    //     } catch (e) {
    //       throw new AuthenticationError("Your session expired. Sign in again.");
    //     }
    //   }
    // };
    yield typeorm_1.createConnection();
    const server = new apollo_server_express_1.ApolloServer({
        introspection: true,
        playground: true,
        typeDefs: types_1.default,
        resolvers: resolvers_1.default
        // formatError: error => {
        //   // remove the internal sequelize error message
        //   // leave only the important validation error
        //   const message = error.message
        //     .replace("SequelizeValidationError: ", "")
        //     .replace("Validation error: ", "");
        //   return {
        //     ...error,
        //     message
        //   };
        // },
        // context: async ({ req, connection }) => {
        //   if (connection) {
        //     return {
        //       models,
        //       loaders: {
        //         user: new DataLoader(keys => loaders.user.batchUsers(keys, models))
        //       }
        //     };
        //   }
        //   if (req) {
        //     const me = await getMe(req);
        //     return {
        //       models,
        //       me,
        //       secret: process.env.SECRET,
        //       loaders: {
        //         user: new DataLoader(keys => loaders.user.batchUsers(keys, models))
        //       }
        //     };
        //   }
        // }
    });
    server.applyMiddleware({ app, path: "/graphql" });
    const isTest = !!process.env.TEST_DATABASE;
    const isProduction = !!process.env.DATABASE_URL;
    const port = process.env.PORT || 4000;
    const httpServer = http_1.createServer(app);
    httpServer.listen({ port }, () => console.log(`🚀 GraphQL is now running on http://localhost:${port}/graphql`));
});
startServer();
//# sourceMappingURL=index.js.map