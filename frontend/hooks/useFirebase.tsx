import React, { useContext } from 'react';
import { FirebaseContext } from 'components/Firebase/context';

export const useFirebase = () => {
  return useContext(FirebaseContext);
};
