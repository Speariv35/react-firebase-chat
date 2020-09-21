import {useEffect, useState} from "react";
import {db} from "../firebase";

export default function useDoc(path) {
    const [doc, setDoc] = useState([]);
    useEffect(async () => {
       const doc =  db.doc(path).get().then(doc => {
            setDoc({
                id: doc.id,
                ...doc.data()
            })
        })

    }, [])
    return doc;
}

