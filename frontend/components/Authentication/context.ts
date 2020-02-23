import React from 'react';

export interface UserSession {
  initializing: boolean;
  user?: any;
  createOrUpdateUser(): void;
}

export const UserContext = React.createContext<UserSession>({
  initializing: true,
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  createOrUpdateUser: () => {},
});
