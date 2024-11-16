// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";

// Firebase configuration (use environment variables for sensitive info)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up Function
const SignUp = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    toast.success(`Welcome, ${username}! Your account has been created.`);
    // Add additional logic, e.g., saving username to the database.
  } catch (e) {
    console.error("Error during sign up:", e);
    toast.error(e.message || "An error occurred during sign up.");
  }
};

// Login Function
const LogIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successful!");
    // Add logic for post-login redirection or state updates if needed.
  } catch (e) {
    console.error("Error during login:", e);
    toast.error(e.message || "An error occurred during login.");
  }
};

export { auth, SignUp, LogIn };
