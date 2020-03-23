import { gql } from "apollo-server";

export default gql`
  type Query {
    getMyReview(page: Int, perPage: Int): [Review]
    getReviews(
      categoryReview: ID
      status: Status
      page: Int
      perPage: Int
    ): [Review]
    getReview(_id: ID): Review
    getReviewsMeta(categoryReview: ID, status: Status): ListMetadata
    getMyReviewMeta: ListMetadata
  }

  type Mutation {
    createReview(payload: ReviewInput): Review
    updateReview(payload: ReviewInput): ReviewUpdated
    uploadImageReview(file: Upload, path: String): ImageUrl!
    updateStatusReview(_id: ID, status: Status): Review
    deleteReview(_id: ID): Review
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
    user: User
    createdAt: Date
    updatedAt: Date
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
    user: User
    createdAt: Date
    updatedAt: Date
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
