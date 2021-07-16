import React from "react";
import { useAuth } from "../contexts/AuthContext";
// import { fs } from "../firebase";
// import tricks from "../tricks.json";

const Profile: React.FC = () => {
  const { logout } = useAuth();

  const signOutHandler = () => {
    logout();
  };

  // const submitTricks = () => {
  //   tricks.forEach((trick) => {
  //     fs.collection("allTricks")
  //       .add({
  //         id: trick.id,
  //         name: trick.name,
  //         description: trick.description,
  //         category: trick.category,
  //         difficulty: trick.difficulty,
  //       })
  //       .catch((err) => console.log(err));
  //   });
  // };

  return (
    <div className="flex justify-center flex-col items-center w-full">
      <button
        onClick={signOutHandler}
        className="bg-blueGrey-900 text-white shadow-md text-xl p-2 rounded-lg"
      >
        Sign out
      </button>
      {/* <button
        className="bg-blueGrey-900 text-white shadow-md text-xl p-2 rounded-lg"
        onClick={submitTricks}
      >
        Upload to firebase
      </button> */}
    </div>
  );
};

export default Profile;
