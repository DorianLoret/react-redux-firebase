import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-283f8.firebaseapp.com",
  projectId: "react-firebase-redux-283f8",
  storageBucket: "react-firebase-redux-283f8.appspot.com",
  messagingSenderId: "560213572692",
  appId: "1:560213572692:web:d53833e6f60523d29e01c1",
});

export const auth = app.auth();
export const db = getFirestore();
export default app;
