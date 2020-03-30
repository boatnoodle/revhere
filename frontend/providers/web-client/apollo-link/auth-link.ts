import { setContext } from 'apollo-link-context';
import { checkIfExpired, refreshFirebaseToken } from 'utils/jwt-helper';

export const authLink = setContext(async (_, { headers }) => {
  if (process.browser) {
    const token = localStorage.getItem('token');
    try {
      checkIfExpired(token);
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      };
    } catch (error) {
      console.info(error.message, '=> refreshing... token');
      console.info();
      const justUpdatedToken = await refreshFirebaseToken();
      return {
        headers: {
          ...headers,
          authorization: justUpdatedToken ? `Bearer ${justUpdatedToken}` : '',
        },
      };
    }
    console.log(headers, ' browser');
  } else {
    console.log(headers, ' ssr');
    return {
      headers: {
        ...headers,
      },
    };
  }
});
