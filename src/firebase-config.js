

import { initializeApp } from "firebase/app";
import {getFirestore}  from '@firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "api key",
  authDomain: ".firebaseapp.com",
  projectId: "",
  storageBucket: ".appspot.com",
  messagingSenderId: "sender id",
  appId: "1:4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {db, auth, provider, app}
