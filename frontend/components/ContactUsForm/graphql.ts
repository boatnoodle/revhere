import { gql } from 'apollo-boost';

export const SEND_FEEDBACK = gql`
  mutation SeedFeedback($payload: Payload) {
    sendFeedback(payload: $payload) {
      message
    }
  }
`;
