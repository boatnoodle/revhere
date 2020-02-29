import { gql } from "apollo-server";

export default gql`
  type Mutation {
    addReviewDetail(
      reviewId: ID
      sectionType: SectionType
      body: String
      order: Int
    ): ReviewDetail

    addImageReview(reviewId: ID, file: Upload): ReviewDetail!
  }

  type ReviewDetail {
    _id: ID
    sectionType: String
    body: String
    order: Int
    review: Review
  }

  enum SectionType {
    mainTitle
    subTitle
    content
    image
  }
`;
