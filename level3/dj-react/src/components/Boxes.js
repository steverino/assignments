import React from "react";
import { useState } from "react";

import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";


const Boxes = () => {
    function SwitchColor() {
      const [color, setColor] = useState("white");
    }
  return (
    <div className="wrapper">
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
      <button
        type="button"
        onClick={() => SwitchColor("black")}
      >Change</button>
    </div>
  );
};

export default Boxes;
