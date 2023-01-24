import React from "react";

export default function Pet(props) {
  // console.log(props.name);
  let petName = props.name.split(" ");
  
  for (let i = 0; i < petName.length; i++) {
    petName[i] = petName[i][0].toUpperCase() + petName[i].substr(1);
  }
  petName = petName.join(" ");

  let breeds = props.breed
    .split(" ")
    .map(function (breedName) {
      return breedName[0].toUpperCase() + breedName.substring(1);
    })
    .join(" ");

  //  for(let i = 0; i < breedName.length; i++){
  //   breedName[i] = breedName[i][0].toUpperCase() + breedName[i].substr(1)

  // }
  // breedName = breedName.join(" ")

  return (
    <div className="pet">
      <h3 className="pet--name">{petName}</h3>
      <h4 className="pet--breed">Breed: {breeds}</h4>
    </div>
  );
}
