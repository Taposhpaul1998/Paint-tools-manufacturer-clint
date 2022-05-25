// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUgy9kR13o4x4p5MKpBabsAQ2RcqSjRnk",
    authDomain: "hero-paint-tools.firebaseapp.com",
    projectId: "hero-paint-tools",
    storageBucket: "hero-paint-tools.appspot.com",
    messagingSenderId: "58610615960",
    appId: "1:58610615960:web:c52ad4ccd8553fbb1e32ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
