import React from "react";
import TrickCard from "../components/TrickCard";
import { useFirestore } from "../contexts/FireContext";

const TrickList: React.FC = () => {
  const { allTricks } = useFirestore();

  console.log(allTricks);

  return (
    <div className="">
      {allTricks.map((trick) => (
        <TrickCard
          name={trick.name}
          description={trick.description}
          category={trick.category}
          difficulty={trick.difficulty}
          key={trick.id}
        />
      ))}
    </div>
  );
};

export default TrickList;
