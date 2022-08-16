// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsb9bSSnN8dg-ZtNiW_WxzrXNJadVvN7A",
  authDomain: "react-tailwindcsstodo.firebaseapp.com",
  projectId: "react-tailwindcsstodo",
  storageBucket: "react-tailwindcsstodo.appspot.com",
  messagingSenderId: "1018400894371",
  appId: "1:1018400894371:web:7a4a3283e6b5f1912c3e16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)