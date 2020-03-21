import { gql } from 'apollo-boost';

export const GET_PROFILE = gql`
  query GetProfile {
    me {
      name
      email
      photoURL
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
