import React from "react";
import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item); // Call the parent component's callback function with the clicked item
  };

  return (
    <li className="card" onClick={handleCardClick}>
      <h2 className="card__name">{item.name}</h2>
      <img
        src={item.imageUrl} // Use imageUrl here
        alt={item.name}
        className="card__image"
      />
    </li>
  );
}

export default ItemCard;
