import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { seedDatabase } from "../seed";

//somehow seed the database

const config = {
  //keys
  apiKey: "AIzaSyBkvFEny-75AMHZsbVxyA9Pz0wjA_zF3gA",
  authDomain: "netflix2-4d049.firebaseapp.com",
  projectId: "netflix2-4d049",
  storageBucket: "netflix2-4d049.appspot.com",
  messagingSenderId: "721483326498",
  appId: "1:721483326498:web:f3ed56bc909b5740a0967b",
  measurementId: "G-7C4YJ33RV2",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
