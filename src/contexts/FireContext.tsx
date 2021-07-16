import React, { useContext, useEffect, useState } from "react";
import { fs } from "../firebase";
import { Trick } from "../models/tricks";

interface IFireContext {
  allTricks: Trick[];
}

const FireContext = React.createContext({} as IFireContext);

export function useFirestore() {
  return useContext(FireContext);
}

const FireProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [allTricks, setAllTricks] = useState<Trick[]>([]);

  useEffect(() => {
    const unsub = () => {
      fs.collection("allTricks")
        .get()
        .then((snap) => {
          let tempTricks: Trick[] = [];
          snap.forEach((doc) => tempTricks.push(doc.data() as Trick));
          setAllTricks(tempTricks);
        })
        .catch((err) => console.log(err));
      setLoading(false);
    };
    console.log("Ran");
    return unsub();
  }, []);

  const value = {
    allTricks,
  };

  return (
    <FireContext.Provider value={value}>
      {!loading && children}
    </FireContext.Provider>
  );
};

export default FireProvider;
