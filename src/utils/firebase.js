// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrXbaUCE42HcyDLDGYxOzJYqsro8NJ7m8",
  authDomain: "foodorderingapp-4587.firebaseapp.com",
  projectId: "foodorderingapp-4587",
  storageBucket: "foodorderingapp-4587.firebasestorage.app",
  messagingSenderId: "530871161469",
  appId: "1:530871161469:web:3e3f0e89269cee8811d714",
  measurementId: "G-C3JH15Y53D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);