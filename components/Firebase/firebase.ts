import 'react';
import Router from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import { message } from 'antd';

const config = {
    apiKey: 'AIzaSyCf-zMEDcKa8nFOn96jNm-0mmcPlcpABBs',
    authDomain: 'revhere-51751.firebaseapp.com',
    databaseURL: 'https://revhere-51751.firebaseio.com',
    projectId: 'revhere-51751',
    storageBucket: 'revhere-51751.appspot.com',
    messagingSenderId: 'G-442W9NDKZE',
};

class Firebase {
    auth: firebase.auth.Auth;
    facebookAuthProvider: {};
    constructor() {
        const app = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
        this.auth = app.auth();
        this.facebookAuthProvider = firebase.auth.FacebookAuthProvider.PROVIDER_ID;
    }

    createUserWithEmailAndPassword = async ({ email, password, firstName, lastName }, rootUrl: string) => {
        const actionCodeSettings = {
            url: `${rootUrl}/auth`,
            handleCodeInApp: true,
        };

        try {
            const userData = await this.auth.createUserWithEmailAndPassword(email, password);
            const displayName = `${firstName} ${lastName}`;

            await this.updateProfile(displayName);

            //Send email verification link
            await userData.user.sendEmailVerification(actionCodeSettings);

            message.success('Your account was created - please verify using link in email.');

            Router.push('/email-sent/register');
        } catch (error) {
            const errorMessage = error.message;
            message.error(errorMessage);
        }
    };

    updateProfile = async displayName => {
        const user = this.auth.currentUser;

        try {
            const response = user.updateProfile({
                displayName,
            });
            console.log(response);
        } catch (error) {
            const errorMessage = error.message;
            message.error(errorMessage);
        }
    };

    signInWithEmailAndPassword = async ({ email, password }) => {
        try {
            const userData = await this.auth.signInWithEmailAndPassword(email, password);
            if (!userData.user.emailVerified) {
                message.error('Please verify your email.');
            } else {
                message.success('Sign in successfully.');
            }
        } catch (error) {
            const errorMessage = error.message;
            message.error(errorMessage);
        }
    };

    signInWithFacebook = async () => {
        const provider = new firebase.auth.FacebookAuthProvider();

        try {
            const response = await this.auth.signInWithPopup(provider);
            message.success('Sign in successfully.');
            return response;
        } catch (error) {
            const errorMessage = error.message;
            message.error(errorMessage);
        }
    };

    sendPasswordResetEmail = async ({ email }: { email: string }, rootUrl: string) => {
        const actionCodeSettings = {
            url: `${rootUrl}/auth`,
            handleCodeInApp: true,
        };

        try {
            await this.auth.sendPasswordResetEmail(email, actionCodeSettings);
            message.success('Please check your email.');
            Router.push('/email-sent/forgot-password');
        } catch (error) {
            const errorMessage = error.message;
            message.error(errorMessage);
        }
    };

    updatePassword = async newPassword => {
        try {
            const user = this.auth.currentUser;
            const response = await user.updatePassword(newPassword);
            console.log(response);
        } catch (error) {
            const errorMessage = error.message;
            message.error(errorMessage);
        }
    };

    doSignOut = async () => {
        await this.auth.signOut();
        localStorage.removeItem('pmbtoken');
        const text = 'Successfully logged out.';
        message.success(text);
    };
}

export { Firebase };
