import { gql } from 'apollo-boost';

export const GET_USER_ROLE = gql`
  query GetUserRole {
    me {
      role
    }
  }
`;

export const CREATE_OR_UPDATE_USER = gql`
  mutation {
    createOrUpdateUser {
      name
    }
  }
`;
