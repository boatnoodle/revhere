import { gql } from "apollo-server";

export default gql`
  type Query {
    hello: String!
    users: [User!]
    user(id: ID!): User
    me: User
  }

  type Mutation {
    createOrUpdateUser: User
    register(email: String, name: String, role: String): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
    role: String
  }
`;
