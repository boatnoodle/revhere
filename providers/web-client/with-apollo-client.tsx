import React from 'react';
import initApolloClient from './init-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import Head from 'next/head';

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */
export const withApollo = (PageComponent, { ssr = true } = {}) => {
    const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
        const client = apolloClient || initApolloClient(apolloState);
        return (
            <ApolloProvider client={client}>
                <PageComponent {...pageProps} />
            </ApolloProvider>
        );
    };

    // Set the correct displayName in development
    if (process.env.NODE_ENV !== 'production') {
        const displayName = PageComponent.displayName || PageComponent.name || 'Component';

        if (displayName === 'App') {
            console.warn('This withApollo HOC only works with PageComponents.');
        }

        WithApollo.displayName = `withApollo(${displayName})`;
    }

    if (ssr || PageComponent.getInitialProps) {
        WithApollo.getInitialProps = async props => {
            const { AppTree } = props;

            // Initialize ApolloClient, add it to the props object so
            // we can use it in `PageComponent.getInitialProp`.

            const apolloClient = (props.apolloClient = initApolloClient(null, props?.ctx?.req?.headers));

            // Run wrapped getInitialProps methods
            let pageProps = {};
            if (PageComponent.getInitialProps) {
                pageProps = await PageComponent.getInitialProps(props);
            }

            // Only on the server:
            if (typeof window === 'undefined') {
                // When redirecting, the response is finished.
                // No point in continuing to render
                if (props?.res?.finished) {
                    return pageProps;
                }

                // Only if ssr is enabled
                if (ssr) {
                    try {
                        // Run all GraphQL queries
                        const { getDataFromTree } = await import('@apollo/react-ssr');
                        await getDataFromTree(
                            <AppTree
                                pageProps={{
                                    ...pageProps,
                                    apolloClient,
                                }}
                            />,
                        );
                    } catch (error) {
                        // Prevent Apollo Client GraphQL errors from crashing SSR.
                        // Handle them in components via the data.error prop:
                        // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                        console.error('Error while running `getDataFromTree`', error);
                    }

                    // getDataFromTree does not call componentWillUnmount
                    // head side effect therefore need to be cleared manually
                    Head.rewind();
                }
            }

            // Extract query data from the Apollo store
            const apolloState = apolloClient.cache.extract();

            return {
                ...pageProps,
                apolloState,
            };
        };
    }

    return WithApollo;
};
