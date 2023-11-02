import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAecrCsRGA8r74AWdM8DWMtQSQ1kw4nKU",
  authDomain: "easy-gaming-45d44.firebaseapp.com",
  projectId: "easy-gaming-45d44",
  storageBucket: "easy-gaming-45d44.appspot.com",
  messagingSenderId: "1020452863892",
  appId: "1:1020452863892:web:122e01eab4717dd5c5d981"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
