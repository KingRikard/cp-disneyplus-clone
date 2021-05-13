import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKSp2RoSu8ngfKqZ-DZgxUKTosUaU_ji8",
  authDomain: "disneyplus-clone-c1fbb.firebaseapp.com",
  projectId: "disneyplus-clone-c1fbb",
  storageBucket: "disneyplus-clone-c1fbb.appspot.com",
  messagingSenderId: "123246033247",
  appId: "1:123246033247:web:76d8858e60b896f72d5eea",
  measurementId: "G-RP0GQ0EXSR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
 
export { auth, provider, storage };
export default db;
