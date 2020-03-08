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
