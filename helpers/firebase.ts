// import firebase from "firebase/app";
import { initializeApp } from "@firebase/app";
import { getFirestore } from "firebase/firestore";

// import {  } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDJ49wRGxUxX2oGnCbufLbdZcV4IYjXHaM",
  authDomain: "next-fire-commu.firebaseapp.com",
  projectId: "next-fire-commu",
  storageBucket: "next-fire-commu.appspot.com",
  messagingSenderId: "873124379840",
  appId: "1:873124379840:web:29d80015cf2d3f16048125",
  measurementId: "G-5Z8ZWGS7W9",
};

// firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

// db.collection()

// const Firebase = firebase.initializeApp(firebaseConfig);

// export default Firebase;

// const db = firebase.

// export const firestore = firebase.
