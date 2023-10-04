// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAixoy9_XDEAmXb854E0oBFKlx7ji4Jh9Y",
  authDomain: "react-dragon-news-auth-80dcb.firebaseapp.com",
  projectId: "react-dragon-news-auth-80dcb",
  storageBucket: "react-dragon-news-auth-80dcb.appspot.com",
  messagingSenderId: "970995648024",
  appId: "1:970995648024:web:b03cf63282df4a44f4e56d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;