import fetch from 'isomorphic-unfetch';
import { createUploadLink } from 'apollo-upload-client';
import { isBranchDevelop } from 'utils/check-env';

export const uploadLink = headers => {
  const host = headers?.host;
  const prodUrl = 'revhere.com';
  const developerUrl = 'dev.revhere.com';
  const baseUrl = isBranchDevelop() ? developerUrl : prodUrl;
  const isDevelopment = process.env.NODE_ENV !== 'production';

  const fullUrl = `https://${host || baseUrl}/graphql`;
  const ssrUrl = isDevelopment ? 'http://localhost:4000/graphql' : fullUrl;
  let csrUrl;

  if (process.browser && isDevelopment) {
    csrUrl = 'http://localhost:4000/graphql';
  } else if (process.browser) {
    csrUrl = `${window.location.protocol}//${window.location.host}/graphql`;
  } else {
    csrUrl = '';
  }

  const liveUrl = !!csrUrl ? csrUrl : ssrUrl;

  const uploadLink = createUploadLink({
    uri: liveUrl,
  });

  return uploadLink;
};
