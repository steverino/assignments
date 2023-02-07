import React from "react";

const Die = (props) => {

  const [nums, setNums] = React.useState(0);
  const changeNum = () => {
    let rand = Math.floor(Math.random() * 6 + 1);
    setNums(rand);
  };
  
  
  return (
    <div>
      
      <div className={`die`} onClick={()=>props.reloadClick()}>{nums} </div>

      <button className={`rollBtn `} onClick={changeNum}>
        Roll
      </button>
    </div>
  );
};

export default Die;
