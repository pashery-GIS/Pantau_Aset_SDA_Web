import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS8VnQ6WmqS5eMBYnTqQwQoT3K1MFqME0",
  authDomain: "pantau-aset-sda.firebaseapp.com",
  projectId: "pantau-aset-sda",
  storageBucket: "pantau-aset-sda.firebasestorage.app",
  messagingSenderId: "757774059545",
  appId: "1:757774059545:web:c0507a6762c02244f40288"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { doc, getDoc, setDoc, onSnapshot };
