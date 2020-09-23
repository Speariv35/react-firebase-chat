import firebase from "firebase/app";
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
export const db = firebase.firestore();
export const rtdb = firebase.database();
export const fireb = firebase;

export const setupPresence = (user) => {
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

export const setActiveChannel = (user, channelId) => {
    db.doc(`users/${user.uid}`)
        .update({
                channels: {
                    [channelId]: true
                }
            }
        )
}

export const handleLogOut = () => {
    firebase.auth().signOut();
}

export const addMessage = (user, channelId, value) => {
    db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .add({
            user: db.collection('users').doc(user.uid),
            text: value,
            createdAt: new Date()
        })
}

export const addChannel = (id) => {
    db.collection('channels').doc(id)
        .set({topic: 'You can change it any time!'})
}

export const changeChannelTopic = (channel, value) => {
    db.doc(`channels/${channel.id}`)
        .update({topic: value})
}


