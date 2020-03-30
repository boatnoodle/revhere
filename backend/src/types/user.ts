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
    _id: ID!
    name: String
    email: String
    photoURL: String
    role: String
  }
`;
