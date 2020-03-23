import { gql } from 'apollo-boost';

export const GET_MY_REVIEW = gql`
  query GetMyReview($page: Int, $perPage: Int) {
    reviews: getMyReview(page: $page, perPage: $perPage) {
      _id
      titleReview
      introReview
      imageCover
      status
    }
    reviewMeta: getMyReviewMeta {
      count
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
