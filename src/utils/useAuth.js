import {useEffect, useState} from "react";
import {db, firebase} from "../firebase";

export default function useAuth() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        return firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                const user = {
                    name: firebaseUser.displayName,
                    photoUrl: firebaseUser.photoURL,
                    uid: firebaseUser.uid
                }
                setUser(user)
                db.collection('users')
                    .doc(user.uid)
                    .set(user, {merge: true})
            } else {
                setUser(null)
            }
        });
    }, []);

    return user;
}

