import jwt from 'jsonwebtoken';
import firebase from 'firebase/app';
import 'firebase/app';

export const checkIfExpired = token => {
  if (!token) {
    throw new Error('No token');
  }
  const decoded = jwt.decode(token);

  if (!decoded) {
    throw new Error('Bad token');
  }
  const now = Date.now().valueOf() / 1000;
  if (decoded?.exp < now) {
    throw new Error(`token expired: ${JSON.stringify(decoded)}`);
  }
};

export const refreshFirebaseToken = async () => await firebase.auth().currentUser?.getIdToken();
