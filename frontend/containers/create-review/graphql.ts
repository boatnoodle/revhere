import { gql } from 'apollo-boost';

export const CREATE_REVIEW = gql`
  mutation CreateReview($titleReview: String, $introReview: String, $imageCover: Upload) {
    createReview(titleReview: $titleReview, introReview: $introReview, imageCover: $imageCover) {
      _id
      titleReview
      introReview
      imageCover
      body
      status
    }
  }
`;
