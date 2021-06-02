import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBVJa1gLj6vliIEstXscJXjjbUNT5K37bQ",
    authDomain: "unichat-007.firebaseapp.com",
    projectId: "unichat-007",
    storageBucket: "unichat-007.appspot.com",
    messagingSenderId: "1046484373115",
    appId: "1:1046484373115:web:635e9a38f9388d58eddcde",
  })
  .auth();
