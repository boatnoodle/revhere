import { gql } from "apollo-server";

export default gql`
  type Query {
    getMyReview: [Review]
    getReviews(status: Status, page: Int, perPage: Int): [Review]
    getReview(_id: ID): Review

    getReviewsMeta(status: Status): ListMetadata
  }

  type Mutation {
    createReview(
      titleReview: String
      introReview: String
      imageCover: Upload
    ): Review
    uploadImageReviewDetail(file: Upload): ImageUrl!
    updateReviewDetail(
      _id: ID!
      titleReview: String
      introReview: String
      body: String
    ): Review
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
    categoryReview: CategoryReview
    tag: [Tag]
    status: String
  }

  enum Status {
    DRAFT
    PUBLISH
    REMOVE
  }
`;
