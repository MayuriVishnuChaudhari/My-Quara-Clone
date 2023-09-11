import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDXzdYotHPdMQyFrNwjvhc8wngZScTzUik",
  authDomain: "quara-clone-273f0.firebaseapp.com",
  projectId: "quara-clone-273f0",
  storageBucket: "quara-clone-273f0.appspot.com",
  messagingSenderId: "24883995646",
  appId: "1:24883995646:web:216373b8441d4b725856af",
  measurementId: "G-DEP1B94M1N"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const db = firebaseApp.firestore();
  
  export { auth, provider };
  export default db;
