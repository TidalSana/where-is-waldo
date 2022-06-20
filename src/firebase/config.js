import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkrPrBHda3zOMGAeMDE8iZXxW4wbnZOi4",
  authDomain: "whereiskirby-44df6.firebaseapp.com",
  projectId: "whereiskirby-44df6",
  storageBucket: "whereiskirby-44df6.appspot.com",
  messagingSenderId: "865772639725",
  appId: "1:865772639725:web:5d5e034314ec68ab0543e4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
