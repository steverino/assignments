import React from "react";
import Card from "./Card";
import data from "../data.js";

export default function CardList() {
  const cards = data.map(function (card) {
    return (
      <div className="card-list">
        <Card place={card.place} price={card.price} timeToGo={card.timeToGo} />
      </div>
    );
  });
  return cards;
}
