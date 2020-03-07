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
