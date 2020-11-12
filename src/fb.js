import * as firebase from 'firebase'
import 'firebase/firestore'


var config= {
    apiKey: "AIzaSyDLaEC0KZqZE-W_QH-VllE8a8AvlgnaNDU",
    authDomain: "todo-ninja-eaf63.firebaseapp.com",
    databaseURL: "https://todo-ninja-eaf63.firebaseio.com",
    projectId: "todo-ninja-eaf63",
    storageBucket: "todo-ninja-eaf63.appspot.com",
    messagingSenderId: "31328703395",
    appId: "1:31328703395:web:e2e7fd295e24e93c1ac016",
    measurementId: "G-ET7EV79Z5G"
  };
  firebase.initializeApp(config);

  const db=firebase.firestore();

  export default db;