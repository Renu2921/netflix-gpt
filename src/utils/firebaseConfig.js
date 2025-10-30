// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIaWNAP8jz7ij8eXjOpP4aZsazF9T56hk",
  authDomain: "netflix-gpt-b63e0.firebaseapp.com",
  projectId: "netflix-gpt-b63e0",
  storageBucket: "netflix-gpt-b63e0.firebasestorage.app",
  messagingSenderId: "239901644679",
  appId: "1:239901644679:web:0a80d5aa2d357719d06522",
  measurementId: "G-MC33J8YTSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)
export const auth = getAuth();