/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC34x0e0TvLSdFxWrYsaCW74h1-VrD3rwo",
  authDomain: "jobportal-23f90.firebaseapp.com",
  projectId: "jobportal-23f90",
  storageBucket: "jobportal-23f90.appspot.com",
  messagingSenderId: "361202321637",
  appId: "1:361202321637:web:771b3664f5573179cfac0c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)