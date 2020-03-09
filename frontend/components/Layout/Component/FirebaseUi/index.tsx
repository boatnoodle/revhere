import React, { useContext } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { useMutation } from '@apollo/react-hooks';
import { FirebaseContext } from 'components/Firebase';
import { CREATE_OR_UPDATE_USER } from 'components/Authentication/graphql';

export const FacebookUi = () => {
  const [createOrupdateUser] = useMutation(CREATE_OR_UPDATE_USER);
  const firebase = useContext(FirebaseContext);

  // Configure FirebaseUI.
  const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function() {
        createOrupdateUser();
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
