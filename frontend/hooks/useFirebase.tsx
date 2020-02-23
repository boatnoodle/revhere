import React, { useContext } from 'react';
import { FirebaseContext } from 'components/Firebase/context';

/**
 * you can useSession only if your component is wrapped with <ProvideAuth>
 */
export const useFirebase = () => {
  return useContext(FirebaseContext);
};
