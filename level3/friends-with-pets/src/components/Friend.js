import React from "react";

export default function Friend(props) {
  // console.log(props.pets);
  return (
      <div className="friend">
        <h3 className="friend--name">Friend: {props.name}</h3>
        <p className="friend--age">Friend Age: {props.age}</p>
        <p className="pets">Pets:</p>
      </div>
    );
}