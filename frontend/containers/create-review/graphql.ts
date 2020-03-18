import { gql } from 'apollo-boost';

export const GET_REVIEW = gql`
  query GetReview($_id: ID) {
    review: getReview(_id: $_id) {
      _id
      titleReview
      introReview
      imageCover
      body
      categoryReview {
        _id
        name
        tags {
          _id
          name
        }
      }
      tags {
        _id
        name
      }
      status
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($payload: ReviewInput) {
    createReview(payload: $payload) {
      _id
    }
  }
`;

export const UPDATE_REVIEW = gql`
  mutation UpdateReview($payload: ReviewInput) {
    updateReview(payload: $payload) {
      _id
    }
  }
`;

export const UPLOAD_IMAGE_REVIEW = gql`
  mutation UplaodImageReview($file: Upload, $path: String) {
    imageReview: uploadImageReview(file: $file, path: $path) {
      urlImage
    }
  }
`;
