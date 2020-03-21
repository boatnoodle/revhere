import { CategoryReview } from './../../types/categoryReview';
import { gql } from 'apollo-boost';

export const GET_CATEGORY_LISTS = gql`
  query GetCategoryLists {
    categoryLists: getCategoryReview {
      _id
      name
    }
  }
`;
export const GET_REVIEWS = gql`
  query getReviews($status: Status, $categoryReview: ID) {
    reviews: getReviews(status: $status, categoryReview: $categoryReview) {
      _id
      titleReview
      introReview
      imageCover
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
    reviewMeta: getReviewsMeta(status: $status) {
      count
    }
  }
`;
