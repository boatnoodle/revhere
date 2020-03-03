import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createReview(
      titleReview: String
      introReview: String
      imageCover: Upload
    ): Review

    updateDetailReview(reviewId: ID!, body: String): Review
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
