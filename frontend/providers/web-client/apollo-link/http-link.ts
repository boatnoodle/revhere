import fetch from 'isomorphic-unfetch';
import { createUploadLink } from 'apollo-upload-client';

const GRAPHQL_URL =
  process.env.NODE_ENV === 'production' ? 'https://phukethomevilla.com/graphql' : 'http://localhost:4000/graphql';

export const uploadLink = createUploadLink({ uri: GRAPHQL_URL });
