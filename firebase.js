import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB9e93n_9_VnHvwo9FUR6ONEcTGcT-9-is",
  authDomain: "studtracker.firebaseapp.com",
  projectId: "studtracker",
  storageBucket: "studtracker.appspot.com",
  messagingSenderId: "604069844765",
  appId: "1:604069844765:web:2b394b51743477b6d673f4",
  measurementId: "G-5S5HPY9M8B"
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID, 
//   measurementId: process.env.REACT_APP_FIREBASE_APP_MEASUREMENT_ID 
// };

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {
  auth
}