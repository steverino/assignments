import React from "react";
import Card from "./Card";
import data from "../data.js";

export default function CardList() {
  const cards = data.map(function (card) {
    return (
      <Card place={card.place} price={card.price} timeToGo={card.timeToGo} />
    );
  });
  return cards
}
