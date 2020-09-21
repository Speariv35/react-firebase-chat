import {useEffect, useState} from "react";
import {db} from "../firebase";

export default function useDoc(path) {
    const [doc, setDoc] = useState([]);
    useEffect(() => {
       return  db.doc(path).onSnapshot(doc => {
            setDoc({
                id: doc.id,
                ...doc.data()
            })
        })

    }, [])
    return doc;
}

