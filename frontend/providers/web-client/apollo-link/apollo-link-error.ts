import { onError } from 'apollo-link-error';

export const apolloLinkError = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});
