import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBaEjh_JBQVfbCEg85SwPtFVIFdjHrElNE",
  authDomain: "hut-centrum.firebaseapp.com",
  projectId: "hut-centrum",
  storageBucket: "hut-centrum.appspot.com",
  messagingSenderId: "333954891266",
  appId: "1:333954891266:web:3648e19272cdd1bae6311b",
  measurementId: "G-5NFVWZGMV6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
