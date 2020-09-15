import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAb8Y8o3lzhNMLBlvZQHPngp6mrzAol8pA",
    authDomain: "cltwit.firebaseapp.com",
    databaseURL: "https://cltwit.firebaseio.com",
    projectId: "cltwit",
    storageBucket: "cltwit.appspot.com",
    messagingSenderId: "317373879735",
    appId: "1:317373879735:web:454efd8b23770bf9eb0432",
    measurementId: "G-4Y78H516KS"
  };

  export default firebase.initializeApp(firebaseConfig);
