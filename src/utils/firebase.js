// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
export const db = getFirestore(app);