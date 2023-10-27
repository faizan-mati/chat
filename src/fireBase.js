import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBkGLUznlkAGHIPW83QK_ygJx9ypKbEr4c",
    authDomain: "chat-72783.firebaseapp.com",
    projectId: "chat-72783",
    storageBucket: "chat-72783.appspot.com",
    messagingSenderId: "669209745807",
    appId: "1:669209745807:web:1f5c6e23f7795bfeb313fa"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();