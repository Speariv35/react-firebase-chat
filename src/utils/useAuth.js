import {useEffect, useState} from "react";
import {db, fireb, setupPresence} from "../firebase";

export default function useAuth() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        return fireb.auth().onAuthStateChanged((firebaseUser) => {
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
                setupPresence(user)
            } else {
                setUser(null)
            }
        });
    }, []);

    return user;
}

