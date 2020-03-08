import { gql } from "apollo-server";

export default gql`
  type Tag {
    _id: ID!
    name: String!
    categoryReview: CategoryReview
  }
`;
