// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs-AAaXIz0O6hwt8fPuqTnFeyeSNd7v8I",
  authDomain: "wiznet-india-f7722.firebaseapp.com",
  projectId: "wiznet-india-f7722",
  storageBucket: "wiznet-india-f7722.firebasestorage.app",
  messagingSenderId: "710908112188",
  appId: "1:710908112188:web:94b95173979e599e728239",
  measurementId: "G-N2JNKLD5QH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
