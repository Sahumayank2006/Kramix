import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhLoctz_s70QKG8U3HlcDIjBPJSe1tAAo",
  authDomain: "kramix-7375e.firebaseapp.com",
  projectId: "kramix-7375e",
  storageBucket: "kramix-7375e.firebasestorage.app",
  messagingSenderId: "705873254180",
  appId: "1:705873254180:web:9f706c505cf405736f45b1",
  measurementId: "G-ZKZYWNCZR0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((yes) => yes && (analytics = getAnalytics(app)));
}

export { app, analytics, db };
