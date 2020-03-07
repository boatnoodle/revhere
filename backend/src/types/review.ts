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

    uploadImageReviewDetail(file: Upload): ImageUrl!

    updateReviewDetail(_id: ID!, body: String): Review
  }

  type ImageUrl {
    urlImage: String
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
