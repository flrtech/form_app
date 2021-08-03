import { useEffect, useState } from "react";
import firebase from "./firebase";

const GetStats = () => {
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("stats")
      .onSnapshot((snapshot) => {
        const newStats = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStats(newStats["0"]);
        setIsLoading(false);
      });

    return () => unsubscribe();
  }, []);

  return [stats, isLoading];
};

export default GetStats;
