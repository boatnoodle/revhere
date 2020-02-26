import { AuthProvider } from 'ra-core';
import { Firebase } from 'components/Firebase/firebase';

const authProvider: AuthProvider = {
  login: () => {
    return Promise.resolve();
  },
  logout: () => {
    const firebase = new Firebase();
    firebase.doSignOut();
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () => (localStorage.getItem('permissions') === 'admin' ? Promise.resolve() : Promise.reject()),
  getPermissions: () => {
    const role = localStorage.getItem('permissions');
    return role ? Promise.resolve(role) : Promise.reject();
  },
};

export { authProvider };
