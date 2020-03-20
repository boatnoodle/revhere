import { gql } from 'apollo-boost';

export const GET_CATEGORY_REVIEW = gql`
  query GetCategoryReview {
    categoryReview: getCategoryReview {
      _id
      name
    }
  }
`;
