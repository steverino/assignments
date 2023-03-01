import React, { useEffect } from "react";

const Preview = ({angle,color1,color2,color3,myVar}) => {
  
  const [new3, setNew3] = React.useState('')
  
 useEffect(() => {
   
  
  }, [])
 
let gradient_2 =` background: linear-gradient(${angle}deg, ${color1} , ${color2}); 
-moz-background: linear-gradient(${angle}deg, ${color1} , ${color2}); 
-webkit: linear-gradient(${angle}deg, ${color1} , ${color2})`

let gradient_3 =` background: linear-gradient(${angle}deg, ${color1} , ${color2}, ${color3}); 
-moz-background: linear-gradient(${angle}deg, ${color1} , ${color2}, ${color3}); 
-webkit: linear-gradient(${angle}deg, ${color1} , ${color2}, ${color3})`


  // console.log(gradient);
  return (
    <div className="preview">
      <div className="gradient-preview" style={{ background: `linear-gradient(${angle}deg, ${color1} , ${color2}, ${color3})` }} ></div>
      <div className="code-box">
        <textarea readOnly value={gradient_2} ></textarea>
      </div>
    </div>
  );
};

export default Preview;
