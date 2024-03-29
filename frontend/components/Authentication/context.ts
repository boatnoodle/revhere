import React from 'react';

export interface UserSession {
  initializing: boolean;
  user?: any;
  role: string;
}

export const UserContext = React.createContext<UserSession>({
  initializing: true,
  user: null,
  role: null,
});
