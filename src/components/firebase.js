// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvl1ArT4ygeu7W2qE9qb0EEETYM8SSZ9E",
  authDomain: "smartdot-auth.firebaseapp.com",
  projectId: "smartdot-auth",
  storageBucket: "smartdot-auth.firebasestorage.app",
  messagingSenderId: "912461856004",
  appId: "1:912461856004:web:caa9b7442e840045ada451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getAuth } from "firebase/auth";
export const auth = getAuth(app);