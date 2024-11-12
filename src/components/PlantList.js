import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handleSoldOut, onDelete, onUpdatePrice }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          handleSoldOut={handleSoldOut}
          onDelete={onDelete}
          onUpdatePrice={onUpdatePrice}
        />
      ))}
    </ul>
  );
}

export default PlantList;