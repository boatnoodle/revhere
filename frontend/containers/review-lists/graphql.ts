import { gql } from 'apollo-boost';

export const GET_MY_REVIEW = gql`
  query GetMyReview {
    reviews: getMyReview {
      _id
      titleReview
      introReview
      imageCover
      status
    }
  }
`;

export const UPDATE_REVIEW_STATUS = gql`
  mutation UpdateStatusReview($_id: ID, $status: Status) {
    updateStatusReview(_id: $_id, status: $status) {
      _id
    }
  }
`;
