import React from "react";

import Die from "./Die";

const DiceBox = () => {
  const [clear, setClear] = React.useState(1)
  
  const reloadClick = () => {
    setClear(0)
    
  };

  const showDie = <Die clear={reloadClick}/>
  return (
    <div className="dice-box">
      {showDie}
      {showDie}
      {/* <Die clear={reloadClick} />
      <Die clear={reloadClick} />
      <Die clear={reloadClick} />
      <Die clear={reloadClick} />
      <Die clear={reloadClick} /> */}
      <button onClick={reloadClick}>Reset All dice</button>
    </div>
  );
};

export default DiceBox;
