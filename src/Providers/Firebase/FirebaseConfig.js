// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJrJvkVoMjeh7MZKufsJLToUnHCcjmnU4",
   authDomain: "assignmentcommunication.firebaseapp.com",
  projectId: "assignmentcommunication",
   storageBucket: "assignmentcommunication.appspot.com",
   messagingSenderId: "1017653910308",
   appId: "1:1017653910308:web:5976f756f7e172b9d371b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;