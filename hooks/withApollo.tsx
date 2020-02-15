import fetch from "isomorphic-unfetch";
import withApollo from "next-with-apollo";

import { ApolloLink } from "apollo-link";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import apolloLogger from "apollo-link-logger";
import { onError } from "apollo-link-error";

// Update the GraphQL endpoint to any instance of GraphQL that you like
const GRAPHQL_URL = process.env.GRAPHQL_URL;

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL
});

const apolloLinkError = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ initialState }) =>
    new ApolloClient({
      link: ApolloLink.from([apolloLogger, apolloLinkError, link]),
      cache: new InMemoryCache()
        //  rehydrate the cache using the initial data passed from the server:
        .restore(initialState || {})
    })
);