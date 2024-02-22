// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ1MOv1Dkbbi3R3hKysSWgCQsoA_yMwj0",
  authDomain: "noorecommerce1.firebaseapp.com",
  projectId: "noorecommerce1",
  storageBucket: "noorecommerce1.appspot.com",
  messagingSenderId: "175245622035",
  appId: "1:175245622035:web:e3512f63eda62bed7c38e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;