import { useState, useEffect } from "react";
import firebase from "./firebase";

export const GetClients = () => {
    const [clients, setClients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('clients')
            .onSnapshot((snapshot) => {
                const newClients = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setClients(newClients);
                setIsLoading(false);
            });
        return () => unsubscribe();
    }, []);
    return [clients, isLoading];
};
