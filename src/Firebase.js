import firebase from 'firebase';

const FirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDbUoatbBdbXXnWGVJMOefVI_jb1e-6tXw",
    authDomain: "facebook-messenger-clone-d3b48.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-d3b48.firebaseio.com",
    projectId: "facebook-messenger-clone-d3b48",
    storageBucket: "facebook-messenger-clone-d3b48.appspot.com",
    messagingSenderId: "315591061160",
    appId: "1:315591061160:web:ee4d44266c7667fd699c9d",
    measurementId: "G-6K30Y5XYJ3"
})
const db=FirebaseApp.firestore();
export default db;
