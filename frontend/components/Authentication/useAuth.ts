import 'firebase/auth';
import React, { useState, useEffect } from 'react';
import firebase, { User } from 'firebase/app';

import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { CREATE_OR_UPDATE_USER, GET_USER_ROLE } from './graphql';

export const useAuth = () => {
  const [createOrUpdateUser] = useMutation(CREATE_OR_UPDATE_USER);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [role, setRole] = useState(null);
  const [getUserRole, { error }] = useLazyQuery(GET_USER_ROLE, {
    onCompleted: data => {
      const role = data?.me?.role;
      setRole(role);
      setInitializing(false);
      localStorage.setItem('permissions', role);
    },
  });

  const subscribeAuthChange = async (user, isSubscribed) => {
    const authUserJson = user?.toJSON() as any;
    const authProvider = authUserJson?.providerData[0].providerId;

    if (isSubscribed && authUserJson && authProvider === 'facebook.com') {
      localStorage.setItem('token', authUserJson?.stsTokenManager?.accessToken);
      setUser(authUserJson);
      setInitializing(false);
      await createOrUpdateUser();
    } else {
      setUser(null);
      setInitializing(false);
    }
  };

  useEffect(() => {
    let isSubscribed = true;
    getUserRole();
    const unsubscribe = firebase.auth().onAuthStateChanged(user => subscribeAuthChange(user, isSubscribed));

    return () => {
      isSubscribed = false;
      unsubscribe();
    };
  }, []);

  return { user, initializing, role };
};
