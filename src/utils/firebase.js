import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAW4fbHjPuW9IOgaoWouQEc1Omn4OlP9xw",
  authDomain: "tenedores-v1-ff9f8.firebaseapp.com",
  projectId: "tenedores-v1-ff9f8",
  storageBucket: "tenedores-v1-ff9f8.appspot.com",
  messagingSenderId: "1035550951811",
  appId: "1:1035550951811:web:d22ed45a8e903f55614eb6",
};

export const initFirebase = initializeApp(firebaseConfig);
