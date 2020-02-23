import { gql } from 'apollo-boost';

export const CREATE_OR_UPDATE_USER = gql`
  mutation {
    createOrUpdateUser {
      name
    }
  }
`;
