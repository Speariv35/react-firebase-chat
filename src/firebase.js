import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAsN04DJ6rpvIIKn6W3nb7byo4MlGCG5t8",
    authDomain: "spear-react-chat.firebaseapp.com",
    databaseURL: "https://spear-react-chat.firebaseio.com",
    projectId: "spear-react-chat",
    storageBucket: "spear-react-chat.appspot.com",
    messagingSenderId: "659027641924",
    appId: "1:659027641924:web:619e937eb8885a65579e11"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db, firebase};
