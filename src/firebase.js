// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAugZqs5-3--TatiXOO-iDQ7jwz8TwlUp0",
  authDomain: "slacktastic-79bc0.firebaseapp.com",
  projectId: "slacktastic-79bc0",
  storageBucket: "slacktastic-79bc0.appspot.com",
  messagingSenderId: "909296469273",
  appId: "1:909296469273:web:d57b13ec16c60f79dc3188",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
