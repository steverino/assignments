import React from "react";
import Die from "./Die";

const Random = (props) => {
  
  console.log(props.value);
  
  
    const [checked, setChecked] = React.useState(false);
    let chk;
    const hideBtn = () => {
        setChecked(!checked);
        chk = checked ? 'hide':'show'
        
    };
    
  return (
    <div className="random">
      <Die  />
      <label htmlFor="keep">Keep</label>
      <input type="checkbox" name="keep" id="keep" onChange={hideBtn} />
      
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default Random;
