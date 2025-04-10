// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjIgIif7B3uNfC6Oc2f2QIiar2y7VktWQ",
  authDomain: "netflixgpt-18735.firebaseapp.com",
  projectId: "netflixgpt-18735",
  storageBucket: "netflixgpt-18735.firebasestorage.app",
  messagingSenderId: "702222038445",
  appId: "1:702222038445:web:4471fba87f4fde3f581d24",
  measurementId: "G-M4HNXTNDS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()