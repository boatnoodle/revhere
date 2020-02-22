import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createLinks } from './apollo-link';

let apolloClient = null;

const createApolloClient = (cache = {}, headers?) => {
  return new ApolloClient({
    // connectToDevTools: process.browser,
    ssrMode: typeof window !== 'undefined',
    cache: new InMemoryCache(),
    link: createLinks(),
  });
};

export default function initApollo(initialState?, headers?) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return createApolloClient(initialState, headers);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createApolloClient(initialState, headers);
  }

  return apolloClient;
}
