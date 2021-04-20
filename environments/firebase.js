import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAWNIV8yVQ_J58tbosUltElh5I-9mCDDdw",
    authDomain: "ramdan-mubarak-app-ts.firebaseapp.com",
    projectId: "ramdan-mubarak-app-ts",
    storageBucket: "ramdan-mubarak-app-ts.appspot.com",
    messagingSenderId: "762400960186",
    appId: "1:762400960186:web:30f5fd416ba52e29735c83"
  };

  firebase.initializeApp(config)

  export default firebase;
