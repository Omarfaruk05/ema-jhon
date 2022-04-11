// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD10I72uPaJS3CQsO6dWPCaqxZAlP2r2Bk",
  authDomain: "ema-jhon-cf9af.firebaseapp.com",
  projectId: "ema-jhon-cf9af",
  storageBucket: "ema-jhon-cf9af.appspot.com",
  messagingSenderId: "715230829942",
  appId: "1:715230829942:web:22e0a2f720a95482292e57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;