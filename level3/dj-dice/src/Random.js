import React from "react";
import Die from "./Die";

const Random = () => {
  let rand = Math.floor(Math.random() * 6 + 1);

  const [nums, setNums] = React.useState(rand);
  const changeNum = () => {
    let rand = Math.floor(Math.random() * 6 + 1);
    setNums(rand);
  };

  return (
    <div>
      <Die random={nums}/>
      
      <button onClick={changeNum}>Roll</button>
    </div>
  );
};

export default Random;
