import { gql } from "apollo-server";

export default gql`
  type Query {
    getCategoryReview: [CategoryReview]
  }

  type CategoryReview {
    _id: ID!
    name: String!
    tags: [Tag]
  }
`;
