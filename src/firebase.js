import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/database';
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
const rtdb = firebase.database();

const setupPresence = (user) => {
    const isOfflineForRTDB = {
        state: 'offline',
        lastChanged: firebase.database.ServerValue.TIMESTAMP
    };
    const isOnlineForRTDB = {
        state: 'online',
        lastChanged: firebase.database.ServerValue.TIMESTAMP
    }
    const isOfflineForFirestore = {
        state: 'offline',
        lastChanged: firebase.firestore.FieldValue.serverTimestamp()
    };
    const isOnlineForFirestore = {
        state: 'online',
        lastChanged: firebase.firestore.FieldValue.serverTimestamp()
    };

    const rtdbRef = rtdb.ref(`/status/${user.uid}`)
    const userDoc = db.doc(`/users/${user.uid}`)
    rtdb.ref('.info/connected').on('value', (async snapshot => {
        if (snapshot.val() === false) {
            await userDoc.update({
                status: isOfflineForFirestore
            })
            return
        }
        await rtdbRef.onDisconnect().set(isOfflineForRTDB)
        await rtdbRef.set(isOnlineForRTDB)
        await userDoc.update({
            status: isOnlineForFirestore
        })
    }));
}



export {db, firebase, setupPresence};
