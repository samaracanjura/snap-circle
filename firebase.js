import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import "@firebase/storage";

// Your web app's Firebase configuration, which you copy-pasted from Step 6
const firebaseConfig = {
  // CONFIG INFO GOES HERE
  apiKey: "AIzaSyBkG0PVKY0miMUxkv_Mn6xTCJ30-c2HA8I",
  authDomain: "snap-education.firebaseapp.com",
  projectId: "snap-education",
  storageBucket: "snap-education.appspot.com",
  messagingSenderId: "924530731137",
  appId: "1:924530731137:web:7118148e5eac2029f78580",
  measurementId: "G-LYZ3PVTQRS"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();

export default firestore;
