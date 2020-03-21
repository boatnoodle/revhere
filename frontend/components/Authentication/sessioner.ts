import 'firebase/auth';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import cookie from 'js-cookie';

import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_PROFILE } from './graphql';

export const useAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [role, setRole] = useState(null);
  const [getProfile, { error }] = useLazyQuery(GET_PROFILE, {
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
      const token = authUserJson?.stsTokenManager?.accessToken;
      localStorage.setItem('token', token);
      cookie.set('token', token, { expires: 1 });
      setUser(authUserJson);
      setInitializing(false);
    } else {
      cookie.remove('token');
      setUser(null);
      setInitializing(false);
    }
  };

  useEffect(() => {
    let isSubscribed = true;
    getProfile();
    const unsubscribe = firebase.auth().onAuthStateChanged(user => subscribeAuthChange(user, isSubscribed));

    return () => {
      isSubscribed = false;
      unsubscribe();
    };
  }, []);
  return { user, initializing, role };
};
