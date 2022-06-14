import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const firebaseConfig = {
  apiKey: "AIzaSyCpcP8bc8vIHME5RTBX7bTD38U2NQtp5Tw",
  authDomain: "spacerockethalorings.firebaseapp.com",
  projectId: "spacerockethalorings",
  storageBucket: "spacerockethalorings.appspot.com",
  messagingSenderId: "748657504627",
  appId: "1:748657504627:web:797547792bcf0fa704d506",
  measurementId: "G-RGCKPLRCEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
root.render(
  <React.StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
