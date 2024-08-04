// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkasDX6kErBsIhXQoKKSzSET5MEh27z54",
  authDomain: "inventory-manage-bb0e5.firebaseapp.com",
  projectId: "inventory-manage-bb0e5",
  storageBucket: "inventory-manage-bb0e5.appspot.com",
  messagingSenderId: "341151154579",
  appId: "1:341151154579:web:e78c7945d71e621036e866",
  measurementId: "G-54VGHLGN91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export {firestore}


