// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNtazNXW4-gu7Si97IMU45Rvftxn_XK7Q",
  authDomain: "react-firebase-62301.firebaseapp.com",
  projectId: "react-firebase-62301",
  storageBucket: "react-firebase-62301.appspot.com",
  messagingSenderId: "172744009276",
  appId: "1:172744009276:web:7ba53b9563948915374539",
  measurementId: "G-8BXKJGK4T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);