// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBon1Y9nM-F74c63KlkawwQ707Z81nRQIs",
  authDomain: "react-prep-eb3bf.firebaseapp.com",
  databaseURL: "https://react-prep-eb3bf-default-rtdb.firebaseio.com",
  projectId: "react-prep-eb3bf",
  storageBucket: "react-prep-eb3bf.appspot.com",
  messagingSenderId: "1012541143975",
  appId: "1:1012541143975:web:70af3a0aa5c69a4b421482",
  measurementId: "G-QDE80D0SN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);