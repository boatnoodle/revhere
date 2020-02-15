import React, { useContext, Fragment } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { FirebaseContext } from "components/Firebase";

export const ButtonFacebookAuth = () => {
  const firebase = useContext(FirebaseContext);

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.facebookAuthProvider]
  };

  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth} />
  );
};
