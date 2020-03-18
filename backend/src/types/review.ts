import { gql } from "apollo-server";

export default gql`
  type Query {
    getMyReview: [Review]
    getReviews(status: Status, page: Int, perPage: Int): [Review]
    getReview(_id: ID): Review
    getReviewsMeta(status: Status): ListMetadata
  }

  type Mutation {
    createReview(payload: ReviewInput): Review
    updateReview(payload: ReviewInput): ReviewUpdated
    uploadImageReview(file: Upload, path: String): ImageUrl!
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
    tags: [Tag]
    status: String
  }

  type ReviewUpdated {
    _id: String!
    titleReview: String
    introReview: String
    imageCover: String
    body: String
    categoryReview: String
    tags: [Tag]
    status: String
  }

  input ReviewInput {
    _id: ID
    titleReview: String
    introReview: String
    imageCover: String
    body: String
    categoryReview: ID
    tags: [ID]
    status: String
  }

  enum Status {
    DRAFT
    PUBLISH
    REMOVE
  }
`;
