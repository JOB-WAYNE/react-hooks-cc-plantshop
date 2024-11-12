import React, { useState } from "react";

function PlantCard({ plant, updatePrice, deletePlant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [newPrice, setNewPrice] = useState(plant.price);

  const toggleSoldOut = () => {
    setIsSoldOut(!isSoldOut);
  };

  const handlePriceChange = (e) => {
    setNewPrice(e.target.value);
  };

  const handleUpdatePrice = () => {
    updatePrice(plant.id, parseFloat(newPrice));
  };

  const handleDelete = () => {
    deletePlant(plant.id);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <input
        type="number"
        value={newPrice}
        onChange={handlePriceChange}
        step="0.01"
        min="0"
      />
      <button onClick={handleUpdatePrice}>Update Price</button>
      <button className={isSoldOut ? "" : "primary"} onClick={toggleSoldOut}>
        {isSoldOut ? "Sold Out" : "In Stock"}
      </button>
      <button onClick={handleDelete} className="delete">
        Delete
      </button>
    </li>
  );
}

export default PlantCard;