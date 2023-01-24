import React from "react";
import Friend from "./Friend";
import data from "../data";
import Pet from "./Pet";

export default function FriendList() {
  const friends = data.map(function (friend) {
    let pets = friend.pets.map(function (pet) {
      
        return <Pet name={pet.name} breed={pet.breed} />;

    });
    
    return (
        
        <div className="friend-list">
          <Friend 
          name={friend.name} 
          age={friend.age} />
          {pets}
        </div>
    
    );
  });

  return friends;
}
