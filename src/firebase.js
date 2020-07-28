import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyDmw2S8gA_O8MkYLLXZWvuvkkh242Hx0P4",
    authDomain: "devchannel-8aa71.firebaseapp.com",
    databaseURL: "https://devchannel-8aa71.firebaseio.com",
    projectId: "devchannel-8aa71",
    storageBucket: "devchannel-8aa71.appspot.com",
    messagingSenderId: "805106693675",
    appId: "1:805106693675:web:6de6df4144bc0be5161c6e"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;