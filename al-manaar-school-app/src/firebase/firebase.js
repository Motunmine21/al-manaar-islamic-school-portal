// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmxL3yMq6-lXLcp4mLagra_FyGq2EPRPk",
  authDomain: "al-manaar-school.firebaseapp.com",
  projectId: "al-manaar-school",
  storageBucket: "al-manaar-school.firebasestorage.app",
  messagingSenderId: "439906718415",
  appId: "1:439906718415:web:8f061349541396109b9dba",
  measurementId: "G-3EDH3KZP5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app); 