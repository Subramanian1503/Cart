import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCviuhdFDuc0t8nWMO3ULpux7zcZKDnodk",
  authDomain: "cart-web-app-e6124.firebaseapp.com",
  projectId: "cart-web-app-e6124",
  storageBucket: "cart-web-app-e6124.appspot.com",
  messagingSenderId: "240486273102",
  appId: "1:240486273102:web:cacf27895a01cb9cb9b31f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default db;