import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { fs } from "../firebase";
import { LearningList } from "../models/lists";

const Learn: React.FC = () => {
  const listNameRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [lists, setLists] = useState<LearningList[]>([]);
  const { currentUser } = useAuth();

  const createList = () => {
    fs.collection("users")
      .doc(currentUser.uid)
      .collection("lists")
      .add({
        name: listNameRef.current?.value,
        tricks: [],
      })
      .then(() => console.log("Created a list"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setLoading(true);

    fs.collection("users")
      .doc(currentUser.uid)
      .collection("lists")
      .get()
      .then((snap) => {
        let tempList: LearningList[] = [];
        snap.forEach((doc) => {
          tempList.push({ ...doc.data(), id: doc.id } as LearningList); // id: doc.id
        });
        setLists(tempList);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
    setLoading(false);
  }, [currentUser.uid]);

  console.log(lists);

  return (
    <div className="">
      <div className="flex items-center mx-10">
        <input
          className="rounded-md bg-blueGrey-50 w-full bg-gray-100 p-3"
          placeholder="List name"
          type="text"
          ref={listNameRef}
        ></input>
        <button
          onClick={createList}
          className="bg-blue-700 w-full text-white p-2 m-4"
        >
          Create list
        </button>
      </div>
      {lists && !loading && (
        <>
          {lists.map((list) => (
            <div className="flex m-4 bg-white p-4" key={list.id}>
              <div>{list.name}</div>
              <div className="m-1 bg-blue-100 text-blueGrey-900">
                {list.tricks.map((trick) => (
                  <div>{trick}</div>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Learn;
