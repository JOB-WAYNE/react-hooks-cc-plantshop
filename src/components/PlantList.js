import React from "react";
import PlantCard from "./PlantCard";
const plants = [
  { id: 1, name: "Aloe Vera", species: "Aloe barbadensis" },
  { id: 2, name: "Snake Plant", species: "Sansevieria trifasciata" },
  { id: 3, name: "Peace Lily", species: "Spathiphyllum" },
  // Add more plants as needed
];
function PlantList() {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plants.id} name={plants.name} species={plants.species} />
      ))}
    </ul>
  );
}

 


export default PlantList;


