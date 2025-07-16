import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7W4F9mMcQ9DihbEPSV4g3TljD4NnLEzU",
  authDomain: "miniblog-7d445.firebaseapp.com",
  projectId: "miniblog-7d445",
  storageBucket: "miniblog-7d445.firebasestorage.app",
  messagingSenderId: "751696337389",
  appId: "1:751696337389:web:9c2281f37b33d9c97cefe4"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };