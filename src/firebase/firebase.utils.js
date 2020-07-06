import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_MYdKv-j8eGpSWEIGDPPMnbjohM0EgFI",
    authDomain: "druk-clothing-db.firebaseapp.com",
    databaseURL: "https://druk-clothing-db.firebaseio.com",
    projectId: "druk-clothing-db",
    storageBucket: "druk-clothing-db.appspot.com",
    messagingSenderId: "559052076199",
    appId: "1:559052076199:web:1b2514822a9289f1365782",
    measurementId: "G-1DECZ0FN9R"
};
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
