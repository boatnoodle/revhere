import nextCookie from 'next-cookies';
import Router from 'next/router';

export const auth = ctx => {
  const { token } = nextCookie(ctx);
  // If there's no token, it means the user is not logged in.
  if (!token) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { Location: '/' });
      ctx.res.end();
    } else {
      Router.push('/');
    }
  }
};
