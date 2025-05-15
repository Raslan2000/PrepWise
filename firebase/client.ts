import { getApp, getApps, initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDNHKZJ8TSkNqYnZzfJTHDJ_g0gyeCwrEs",
  authDomain: "prepwise-b493f.firebaseapp.com",
  projectId: "prepwise-b493f",
  storageBucket: "prepwise-b493f.firebasestorage.app",
  messagingSenderId: "674459501438",
  appId: "1:674459501438:web:5aa7ba1829dd637842a92f",
  measurementId: "G-2ZKSY10BW4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);