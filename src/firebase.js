import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT9qi-HYcU38mDdOpYhc79ZtD7McTTu_8",
  authDomain: "amzon-clone-c2394.firebaseapp.com",
  projectId: "amzon-clone-c2394",
  storageBucket: "amzon-clone-c2394.appspot.com",
  messagingSenderId: "1045734354229",
  appId: "1:1045734354229:web:583baf1fb185c67ccaf07c",
  measurementId: "G-Z2EH3S14L2"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db , auth };