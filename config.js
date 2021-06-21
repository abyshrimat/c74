import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyAXehuT3ahswbXEfe8dkbGjko8PZDsfZ6k",
    authDomain: "wily-new-db.firebaseapp.com",
    projectId: "wily-new-db",
    storageBucket: "wily-new-db.appspot.com",
    messagingSenderId: "711027778515",
    appId: "1:711027778515:web:3deda5ebdf922338a80526"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
