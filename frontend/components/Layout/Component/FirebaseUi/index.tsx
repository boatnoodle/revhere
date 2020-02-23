import React, { useContext } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { FirebaseContext } from 'components/Firebase';
import { useSession } from 'hooks/useSession';

export const FacebookUi = () => {
  const firebase = useContext(FirebaseContext);
  const { createOrUpdateUser } = useSession();

  // Configure FirebaseUI.
  const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function() {
        createOrUpdateUser();
        return true;
      },
    },
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.facebookAuthProvider],
  };

  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth} />;
};
