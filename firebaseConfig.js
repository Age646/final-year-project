// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// 
// import * as firebase from 'firebase';
// import '@firebase/auth';
// import '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUFlIkriuA6LU3-hqBr55uMmjCA3Z4Zj0",
  authDomain: "fyp-app-f986c.firebaseapp.com",
  projectId: "fyp-app-f986c",
  storageBucket: "fyp-app-f986c.appspot.com",
  messagingSenderId: "835494937828",
  appId: "1:835494937828:web:a7761007d7848914ff98f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

// export default {auth, db};
// let app;

// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig)
// } else {
//   app = firebase.app();
// }

// const db = app.firestore();
// const auth = firebase.auth();

// export { db, auth };