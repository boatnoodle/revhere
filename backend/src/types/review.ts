import { gql } from "apollo-server";

export default gql`
  type Query {
    getReview(_id: ID): Review
  }

  type Mutation {
    createReview(
      titleReview: String
      introReview: String
      imageCover: Upload
    ): Review

    updateReviewDetail(_id: ID!, body: String): Review
  }

  type Review {
    _id: String!
    titleReview: String
    introReview: String
    imageCover: String
    body: String
    status: String
  }
`;
