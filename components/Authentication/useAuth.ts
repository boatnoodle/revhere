import React, { useState, useEffect } from 'react';
import firebase, { User } from 'firebase/app';
import 'firebase/auth';

export const useAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // const [role, setRole] = useState(null);
  // const [getUserRole, { error }] = useLazyQuery(GET_USER_ROLE, {
  //     onCompleted: data => {
  //         const role = data?.User?.role;
  //         setRole(role);
  //         setInitializing(false);
  //         localStorage.setItem('pmbpermissions', role);
  //     },
  // });

  const subscribeAuthChange = (user, isSubscribed) => {
    const authUserJson = user?.toJSON() as any;
    const authProvider = authUserJson?.providerData[0].providerId;
    console.log(authUserJson, 'from firebase');

    if (isSubscribed && authUserJson && authProvider === 'facebook.com') {
      localStorage.setItem('token', authUserJson?.stsTokenManager?.accessToken);
      setUser(authUserJson);
    } else {
      setUser(null);
      setInitializing(false);
    }
  };

  useEffect(() => {
    let isSubscribed = true;

    const unsubscribe = firebase.auth().onAuthStateChanged(user => subscribeAuthChange(user, isSubscribed));

    return () => {
      isSubscribed = false;
      unsubscribe();
    };
  }, []);

  return { user, initializing };
};
