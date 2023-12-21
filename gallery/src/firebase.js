// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA_Bt9hKa7q7OjB2bsF9kttvl8vQvSSekU",
  authDomain: "liat-photography.firebaseapp.com",
  projectId: "liat-photography",
  storageBucket: "liat-photography.appspot.com",
  messagingSenderId: "365566252603",
  appId: "1:365566252603:web:f434390672d6c17f26ee1e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
