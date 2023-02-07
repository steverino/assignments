import React from "react";
// import { useState } from "react";

import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";

const Boxes = () => {
  // const colors = ["white", "white", "white", "white"]
  const [colors, setColors] = React.useState([
    "white",
    "white",
    "white",
    "white",
  ]);

  function smallTime() {
    colors.map((color) => {
      if (color === "black") {
        setColors(["black", "white", "white", "white"]);
      } else if (color === "white") {
        setColors(["white", "black", "black", "black"]);
      }

    });
    return colors
  }

  function partyDj(){
    setColors(['purple','purple','white','white'])
    
  }

  function blueLeft(){
    setColors(['white','white','blue','white'])
  }
  function blueRight(){
  setColors(['white','white','white','blue'])
  }

  function one(){
    setColors(['green','white','white','white'])
  }
  function two(){
    
    setColors(['white','orange','white','white'])
  }
  function three(){
    setColors(['white','white','pink','white'])
    
  }
  function four(){
    setColors(['white','white','white','brown'])

  }


  return (
    <div className="wrapper">
      <Box1 color={colors[0]} />
      <Box2 color={colors[1]} />
      <Box3 color={colors[2]} />
      <Box4 color={colors[3]} />
      <button type="button" onClick={smallTime}>
        Small
      </button>
      <button type="button" onClick={partyDj}>
        Party
      </button>
      <button type="button" onClick={blueLeft}>
        Blue Left
      </button>
      <button type="button" onClick={blueRight}>
        Blue Right
      </button> 
      <button type="button" onClick={one}>One</button>
      <button type="button" onClick={two}>Two</button>
      <button type="button" onClick={three}>Three</button>
      <button type="button" onClick={four}>Four</button>
    </div>
  );
};

export default Boxes;
