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
  mutation UpdateReviewDetail($_id: ID!, $titleReview: String, $introReview: String, $body: String) {
    review: updateReviewDetail(_id: $_id, titleReview: $titleReview, introReview: $introReview, body: $body) {
      _id
      titleReview
      introReview
      imageCover
      body
      status
    }
  }
`;

export const UPLOAD_IMAGE_REVIEW_DETAIL = gql`
  mutation UplaodImageReview($file: Upload, path: String) {
    imageReviewDetail: uploadImageReview(file: $file, path: $path) {
      urlImage
    }
  }
`;

export const UPDATE_STATUS_REVIEW = gql`
  mutation UpdateStatusReview($status: Status) {
    updateStatusReview(status: $status) {
      _id
    }
  }
`;
