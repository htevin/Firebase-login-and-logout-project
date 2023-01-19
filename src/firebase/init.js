// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtIUkbSB-_kT2obeLbzJSceiHAPfl7E40",
  authDomain: "fir-practice-d565e.firebaseapp.com",
  projectId: "fir-practice-d565e",
  storageBucket: "fir-practice-d565e.appspot.com",
  messagingSenderId: "720991807788",
  appId: "1:720991807788:web:279bb80ed67efc5efea489"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();