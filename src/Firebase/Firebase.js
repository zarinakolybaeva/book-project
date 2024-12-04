// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf-bYzycpqYyOH7iNg8e0EljCOP67V0G8",
  authDomain: "bookstore-be3f1.firebaseapp.com",
  projectId: "bookstore-be3f1",
  storageBucket: "bookstore-be3f1.appspot.com",
  messagingSenderId: "312717274405",
  appId: "1:312717274405:web:4d97abe3427cc4e67d7ecc",
  measurementId: "G-704VDT9PB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;