// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-3c31e.firebaseapp.com",
  projectId: "real-estate-3c31e",
  storageBucket: "real-estate-3c31e.appspot.com",
  messagingSenderId: "803522215219",
  appId: "1:803522215219:web:0fbfc8079f82c10c5b5246"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);