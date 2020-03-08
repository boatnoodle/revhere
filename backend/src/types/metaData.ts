import gql from "graphql-tag";
//An executable GraphQL schema that will override the typeDefs and resolvers provided. If you are using file uploads, you will have to add the Upload scalar to the schema, as it is not automatically added in case of setting the schema manually.
export default gql`
  type ListMetadata {
    count: Int!
  }

  enum SortOrder {
    ASC
    DESC
  }
`;
