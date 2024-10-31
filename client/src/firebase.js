// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1704.firebaseapp.com",
  projectId: "mern-estate-1704",
  storageBucket: "mern-estate-1704.appspot.com",
  messagingSenderId: "462336447797",
  appId: "1:462336447797:web:5ee76f9b6a01d6040fe87c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
