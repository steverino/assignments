import React from "react";
import { useState } from "react";

import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";


const Boxes = () => {
  // const colors = ["white", "white", "white", "white"]
  const [colors, setColors] = React.useState(["white", "white", "white", "white"])

  function switchBW(){
    let newColors = []
    colors.map((color)=>{
    if(color === 'black'){
      newColors = ['black','white','white','white']
      setColors(newColors)
      
          
    }else if(color === 'white'){
      newColors = ['white','black','black','black']
      setColors(newColors)
      
    }
    return newColors
  })
        

  }

  return (
    <div className="wrapper">
      <Box1 color={colors[0]} />
      <Box2 color={colors[1]}/>
      <Box3 color={colors[2]}/>
      <Box4 color={colors[3]}/>
      <button
        type="button"
        onClick={switchBW}
      >Change</button>
    </div>
  );
};

export default Boxes;
