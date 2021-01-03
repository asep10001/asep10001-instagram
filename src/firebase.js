import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDF7eGQ1XbkUFvuSWwYOlXtTkSWmjySbsA",
    authDomain: "asep1001-instagram.firebaseapp.com",
    projectId: "asep1001-instagram",
    storageBucket: "asep1001-instagram.appspot.com",
    messagingSenderId: "492230986446",
    appId: "1:492230986446:web:5ac8bcd157145cf4cd1e9f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {auth, storage}
  export default db;
