// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfuhmD9L4R4qS5ag1ef-os0WDNCOzMl7o",
    authDomain: "quizapp-f96dc.firebaseapp.com",
    projectId: "quizapp-f96dc",
    storageBucket: "quizapp-f96dc.appspot.com",
    messagingSenderId: "248979967784",
    appId: "1:248979967784:web:659e114f2954dad2f04a1d",
    measurementId: "G-MR3X27J5BB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);