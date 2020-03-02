// import apolloLogger from './logger';
import apolloLogger from 'apollo-link-logger';

import { ApolloLink } from 'apollo-link';
import { authLink } from './auth-link';
import { uploadLink } from './http-link';
import { apolloLinkError } from './apollo-link-error';

export const createLinks = () => {
  const productionLink = ApolloLink.from([authLink, uploadLink]);
  const developLink = ApolloLink.from([apolloLogger, authLink, apolloLinkError, uploadLink]);
  return process.env.NODE_ENV === 'production' ? productionLink : developLink;
};
