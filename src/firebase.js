// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzyuggI8qStDjdwPWgaLc38vbfGx9p_cg",
  authDomain: "manageit-abd99.firebaseapp.com",
  projectId: "manageit-abd99",
  storageBucket: "manageit-abd99.appspot.com",
  messagingSenderId: "1093223049282",
  appId: "1:1093223049282:web:d8eb215489cc23957fe5db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);