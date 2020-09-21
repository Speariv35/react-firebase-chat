import {useEffect, useState} from "react";
import {db} from "../firebase";

export default function useCollection(path, orderBy) {
    const [records, setRecords] = useState([]);

    useEffect(() => {

        let collection = db.collection(path);
        if (orderBy) {
            collection = collection.orderBy(orderBy);
        }

        return collection.onSnapshot((snapshot) => {
            const records = [];
            snapshot.forEach(record => {
                records.push({
                    ...record.data(),
                    id: record.id
                })
            })

            setRecords(records);
        })
    }, [path, orderBy])
    return records;
}

