import React from "react";
import Card from "./Card";
import data from "../data.js";

export default function CardList() {
  const cards = data.map(function (card) {
    return (
      <div className="card-list">
        
        <Card
          key={card.id}
          place={card.place}
          price={card.price}
          timeToGo={card.timeToGo}
          img={card.img}
        />
      </div>
    );
  });
  return cards;
}
