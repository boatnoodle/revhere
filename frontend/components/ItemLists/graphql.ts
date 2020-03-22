import { gql } from 'apollo-boost';

export const UPDATE_STATUS_REVIEW = gql`
  mutation UpdateStatusReview($_id: ID, $status: Status) {
    updateStatusReview(_id: $_id, status: $status) {
      _id
      status
    }
  }
`;
