import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyV__R34febwAnLukP09bHy-m-Zt164CA",
  authDomain: "chat-app-f4b98.firebaseapp.com",
  projectId: "chat-app-f4b98",
  storageBucket: "chat-app-f4b98.appspot.com",
  messagingSenderId: "335799161966",
  appId: "1:335799161966:web:dce2a0b1f77c53ed1ec27f",
  measurementId: "G-PX3PQP2X4X",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };
