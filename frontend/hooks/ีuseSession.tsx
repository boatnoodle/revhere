import React, { useContext } from 'react';
import { UserContext, UserSession } from 'components/Authentication/context';

/**
 * you can useSession only if your component is wrapped with <ProvideAuth>
 */
export const useSession = () => {
  return useContext<UserSession>(UserContext);
};
