import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCrNGhb6hhkva3niVcbJ9hVi-MhsnhZN0k",
  authDomain: "messanger-be884.firebaseapp.com",
  projectId: "messanger-be884",
  storageBucket: "messanger-be884.appspot.com",
  messagingSenderId: "434997493815",
  appId: "1:434997493815:web:1032aee47ef1c260903fb2",
  measurementId: "G-7XPJ4ZLGEF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };
