// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1GjvUD_-oB8hlNCqquBzK6SP75RiNJBs",
  authDomain: "react-cursos-53ff3.firebaseapp.com",
  projectId: "react-cursos-53ff3",
  storageBucket: "react-cursos-53ff3.appspot.com",
  messagingSenderId: "31867118327",
  appId: "1:31867118327:web:cc51ab0fc375b99846a9f2",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
