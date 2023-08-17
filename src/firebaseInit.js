// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-cnufmaYWu0K1xPWQP_TZDguZr7NK8rk",
  authDomain: "busybuy-2de14.firebaseapp.com",
  projectId: "busybuy-2de14",
  storageBucket: "busybuy-2de14.appspot.com",
  messagingSenderId: "1001960567258",
  appId: "1:1001960567258:web:c54fda93d88bc16cda10e3",
  measurementId: "G-2SMGM4NL2T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
