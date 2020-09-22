import {useEffect, useState} from "react";
import {db} from "../firebase";

export default function useCollection(path, orderBy, where=[]) {
    const [records, setRecords] = useState([]);
    const [queryField, queryOperator, queryValue] = where;
    useEffect(() => {

        let collection = db.collection(path);
        if (orderBy) {
            collection = collection.orderBy(orderBy);
        }
        if (queryField ) {
            collection = collection.where(queryField, queryOperator, queryValue)
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
    }, [path, orderBy, queryField, queryOperator, queryValue])
    return records;
}

