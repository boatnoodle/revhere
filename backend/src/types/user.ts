import { gql } from "apollo-server";

export default gql`
  type Query {
    hello: String!
    users: [User!]
    user(id: ID!): User
    me: User
  }

  type Mutation {
    register(uid: String, email: String, name: String, role: String): User
    createOrUpdateUser: User
  }

  type User {
    id: ID!
    name: String!
    email: String!
    role: String
  }
`;
