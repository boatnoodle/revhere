import { gql } from "apollo-server";

export default gql`
  type CategoryReview {
    _id: ID!
    name: String!
    tags: [Tag]
  }
`;
