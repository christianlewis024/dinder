import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCCsOWV0KLJk9UunN-NBWKshq0sxKSvVdQ",
    authDomain: "dinder-f65ab.firebaseapp.com",
    databaseURL: "https://dinder-f65ab.firebaseio.com",
    projectId: "dinder-f65ab",
    storageBucket: "dinder-f65ab.appspot.com",
    messagingSenderId: "111942283519",
    appId: "1:111942283519:web:a2b93aa6d94750f24d5cca",
    measurementId: "G-0BKDNQVYR7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;