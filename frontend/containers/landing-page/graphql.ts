import { gql } from 'apollo-boost';

export const GET_MY_REVIEWS = gql`
  query getReviews($status: Status) {
    reviews: getReviews(status: $status) {
      _id
      titleReview
      introReview
      imageCover
      status
    }
    reviewMeta: getReviewsMeta(status: $status) {
      count
    }
  }
`;
