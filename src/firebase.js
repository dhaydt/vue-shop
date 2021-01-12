import firebase from 'firebase';
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyBrk36WIA2o3u3OhOK5qetWvSHcJwfqB2U",
    authDomain: "vue-shop-92b5a.firebaseapp.com",
    projectId: "vue-shop-92b5a",
    storageBucket: "vue-shop-92b5a.appspot.com",
    messagingSenderId: "8173891548",
    appId: "1:8173891548:web:9d2b6610265af2a9df6919"
};
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {fb, db}