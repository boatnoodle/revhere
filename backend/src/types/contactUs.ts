import { gql } from "apollo-server";

export default gql`
  type Mutation {
    sendFeedback(payload: Payload): SendSucceeded
  }

  input Payload {
    name: String
    content: String
    tags: [String]
    priority: Int
  }

  type SendSucceeded {
    message: String
  }
`;
