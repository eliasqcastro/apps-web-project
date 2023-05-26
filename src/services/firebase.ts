// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTL4l4UU8nCUHrLig_Hm27F7y7on1vC3k",
    authDomain: "english-training-199ef.firebaseapp.com",
    projectId: "english-training-199ef",
    storageBucket: "english-training-199ef.appspot.com",
    messagingSenderId: "530236865520",
    appId: "1:530236865520:web:cf8c080d73091e6ce5fb35"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp