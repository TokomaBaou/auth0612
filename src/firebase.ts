import "firebase/auth";
import "firebase/firebase-firestore";

import firebase from "firebase";

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
firebase.initializeApp(config);
const auth = firebase.auth();
export default auth;
