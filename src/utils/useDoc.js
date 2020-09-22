import {useEffect, useState} from "react";
import {db} from "../firebase";

export default function useDoc(path) {

    const cache = {};
    const pendingCache = {};


    const [doc, setDoc] = useState(cache[path]);
    useEffect(() => {
        if (doc) {
            return
        }
        let stillMounted = true;
        let pending = pendingCache[path];

        const promise = pending || (pendingCache[path] = db.doc(path).get())

        promise.then(doc => {
            if (stillMounted) {
                const document = {
                    id: doc.id,
                    ...doc.data()
                }
                setDoc(document)
                cache[path] = document;
            }
        })

        return () => {
            stillMounted = false;
        }

    }, [path])
    return doc;
}

