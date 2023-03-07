import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBG9NNiejJ-FALQYE77c3luvf8pPWHIR44",
    authDomain: "project-c92dc.firebaseapp.com",
    projectId: "project-c92dc",
    storageBucket: "project-c92dc.appspot.com",
    messagingSenderId: "813710140606",
    appId: "1:813710140606:web:6979b2be18923da38aeaef",
    measurementId: "G-WPF3VNNH52"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app()

  const db= app.firestore();

  export default db;