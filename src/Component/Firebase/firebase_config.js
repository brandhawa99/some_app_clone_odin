
import { initializeApp} from "firebase/app";

import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDubEPdNaO_CYIUWCcRyjfAMKF7u0dQKjk",
  authDomain: "final-js-project-bf59e.firebaseapp.com",
  projectId: "final-js-project-bf59e",
  storageBucket: "final-js-project-bf59e.appspot.com",
  messagingSenderId: "947553602110",
  appId: "1:947553602110:web:a0bd700e6f7c4448b05f6f",
  measurementId: "G-X6RJJ44Q8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();