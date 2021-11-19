import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDo03CgN3fqULfz0HFTpF9iImQ87wf5Clw",
    authDomain: "database-e97dd.firebaseapp.com",
    databaseURL: "https://database-e97dd-default-rtdb.firebaseio.com",
    projectId: "database-e97dd",
    storageBucket: "database-e97dd.appspot.com",
    messagingSenderId: "384813822732",
    appId: "1:384813822732:web:19593d72080694bfa9cf29"
  };
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
