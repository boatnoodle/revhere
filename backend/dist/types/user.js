"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.default = apollo_server_1.gql `
  type Query {
    hello: String!
    users: [User!]
    user(id: ID!): User
    me: User
  }

  type Mutation {
    register(email: String, name: String, role: String): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
    role: String
  }
`;
//# sourceMappingURL=user.js.map