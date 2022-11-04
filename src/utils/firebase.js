// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import firebase from "firebase/compat/app";
// import * as firebaseui from 'firebaseui'
// import 'firebaseui/dist/firebaseui.css'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAHulUgyYo4m1BKXHu9oaFAAKC3JVFvR-k",
    authDomain: "billnogates-3f0dd.firebaseapp.com",
    projectId: "billnogates-3f0dd",
    storageBucket: "billnogates-3f0dd.appspot.com",
    messagingSenderId: "634241572101",
    appId: "1:634241572101:web:d8c4af9f3183fa45b16b6c",
    measurementId: "G-YK0LXWH773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// export const ui = new firebaseui.auth.AuthUI(auth);
// export const uiConfig = {
//     callbacks: {
//         signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//             // User successfully signed in.
//             // Return type determines whether we continue the redirect automatically
//             // or whether we leave that to developer to handle.
//             return true;
//         },
//         // uiShown: function () {
//         //     // The widget is rendered.
//         //     // Hide the loader.
//         //     document.getElementById('loader').style.display = 'none';
//         // }
//     },
//     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//     signInFlow: 'popup',
//     signInSuccessUrl: '<url-to-redirect-to-on-success>',
//     signInOptions: [
//         // Leave the lines as is for the providers you want to offer your users.
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//         firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//         firebase.auth.GithubAuthProvider.PROVIDER_ID,
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//         firebase.auth.PhoneAuthProvider.PROVIDER_ID
//     ],
//     // Terms of service url.
//     tosUrl: '<your-tos-url>',
//     // Privacy policy url.
//     privacyPolicyUrl: '<your-privacy-policy-url>'
// };



