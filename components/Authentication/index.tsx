import React from 'react';
import { useAuth } from './useAuth';
import { UserContext } from './context';

export const ProvideAuth = ({ children }) => {
  const auth = useAuth();
  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};
