import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUGG_yxcJ96R2_n53L9DCUg_b4_aaOdOk",
  authDomain: "gwc-la.firebaseapp.com",
  projectId: "gwc-la",
  storageBucket: "gwc-la.firebasestorage.app",
  messagingSenderId: "435198075949",
  appId: "1:435198075949:web:b3acd61d402edc29bb04a4",
  measurementId: "G-WND6TS31X2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
