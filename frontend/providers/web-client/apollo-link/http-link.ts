import fetch from 'isomorphic-unfetch';
import { createHttpLink } from 'apollo-link-http';

const GRAPHQL_URL = process.env.NODE_ENV === 'production' ? process.env.GRAPHQL_URL : 'http://localhost:4000/graphql';

export const httpLink = createHttpLink({
  fetch: !process.browser && fetch, // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL,
});
