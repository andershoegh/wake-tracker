import React from "react";

type ITrickCard = {
  name: string;
  description: string;
  difficulty: string;
  category: string;
};

const TrickCard = ({ name, description, difficulty, category }: ITrickCard) => {
  return (
    <div className="bg-white m-2 shadow-sm rounded-lg p-4 text-blueGrey-900">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl">{name}</div>
        <div
          className={`${
            difficulty === "Easy"
              ? "bg-tealVivid-400"
              : difficulty === "Medium"
              ? "bg-yellow-300"
              : "bg-red-300 text-white"
          } bg-tealVivid-300 rounded-md items-center p-2`}
        ></div>
      </div>
      <div className="text-sm mt-2 text-blueGrey-900">{description}</div>
      <div>{category}</div>
    </div>
  );
};

export default TrickCard;
