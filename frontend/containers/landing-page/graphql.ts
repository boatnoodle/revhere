import { gql } from 'apollo-boost';

export const GET_REVIEWS = gql`
  query getReviews($status: Status) {
    reviews: getReviews(status: $status) {
      _id
      titleReview
      introReview
      imageCover
      tags {
        _id
        name
      }
      categoryReview {
        _id
        name
      }
      user {
        _id
        name
        email
        photoURL
        role
      }
      status
      createdAt
      updatedAt
    }
    reviewMeta: getReviewsMeta(status: $status) {
      count
    }
  }
`;
