import fetch from 'isomorphic-unfetch';
import { createHttpLink } from 'apollo-link-http';

const GRAPHQL_URL = process.env.GRAPHQL_URL;

export const httpLink = createHttpLink({
    fetch: !process.browser && fetch, // Switches between unfetch & node-fetch for client & server.
    uri: GRAPHQL_URL,
});
