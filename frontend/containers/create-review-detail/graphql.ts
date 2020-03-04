import { gql } from 'apollo-boost';

export const GET_REVIEW = gql`
  query GetReview($_id: ID) {
    review: getReview(_id: $_id) {
      _id
      titleReview
      introReview
      imageCover
      body
      status
    }
  }
`;

export const UPDATE_REVIEW_DETAIL = gql`
  mutation UpdateReviewDetail($_id: ID!, $body: String) {
    review: updateReviewDetail(_id: $_id, body: $body) {
      _id
      titleReview
      introReview
      imageCover
      body
      status
    }
  }
`;
