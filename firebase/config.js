// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1RGukdFczAOAKSH7RDY-mXWhkiZP6-Kk",
  authDomain: "housing-e9e5e.firebaseapp.com",
  projectId: "housing-e9e5e",
  storageBucket: "housing-e9e5e.appspot.com",
  messagingSenderId: "986564254561",
  appId: "1:986564254561:web:7c89125811647bce07c320",
  measurementId: "G-4KSMLBSSEG"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;