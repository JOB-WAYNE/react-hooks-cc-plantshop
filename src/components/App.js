import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch plants data from the API
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
        setIsLoading(false);
      });
  }, []);

  const addPlant = (newPlant) => {
    // POST the new plant to the server
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((addedPlant) => {
        setPlants([...plants, addedPlant]); // Add the new plant to the list
      });
  };

  const updatePrice = (id, newPrice) => {
    // PATCH request to update plant price
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: newPrice }),
    })
      .then((response) => response.json())
      .then((updatedPlant) => {
        setPlants((prevPlants) =>
          prevPlants.map((plant) =>
            plant.id === updatedPlant.id ? updatedPlant : plant
          )
        );
      });
  };

  const deletePlant = (id) => {
    // DELETE request to remove a plant
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));
      });
  };

  const searchPlants = (query) => {
    setSearchQuery(query);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={filteredPlants}
        isLoading={isLoading}
        addPlant={addPlant}
        searchPlants={searchPlants}
        updatePrice={updatePrice}
        deletePlant={deletePlant}
      />
    </div>
  );
}

export default App;