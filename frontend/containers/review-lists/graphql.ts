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
