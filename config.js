import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAeA-QfW5ru1QgYrYuvtlnkznt3LjxKaBo",
    authDomain: "team-voting-app-f7959.firebaseapp.com",
    databaseURL: "https://team-voting-app-f7959-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-f7959",
    storageBucket: "team-voting-app-f7959.appspot.com",
    messagingSenderId: "851973629273",
    appId: "1:851973629273:web:08200292ca1945978b9848"
  };git 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();