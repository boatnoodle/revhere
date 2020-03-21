import { gql } from 'apollo-boost';

export const GET_REVIEW = gql`
  query GetReview($_id: ID) {
    review: getReview(_id: $_id) {
      _id
      titleReview
      introReview
      imageCover
      body
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
  }
`;
