import React from "react";

import Random from "./Random";

const DiceBox = () => {
    const reloadClick = () => {
        window.location.reload();
        
      };

      
  return (
    <div className="dice-box">
      
      <Random />
      <Random />
      <Random />
      <Random />
      <Random />
      <button onClick={reloadClick}>Re-roll All dice</button>
    </div>
  );
};

export default DiceBox;
