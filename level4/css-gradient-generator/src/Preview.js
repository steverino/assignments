import React from "react";

const Preview = (props) => {
  return (
    <div className="preview">
      <div className="gradient-preview"></div>
      <div className="code-box">
        <textarea
          readOnly
           value={props.angle}
//"background: linear-gradient(50deg, #FFFF00 , #000000); 
// -moz-background: linear-gradient(50deg, #FFFF00 , #000000); 
// -webkit: linear-gradient(50deg, #FFFF00 , #000000)

// /*for 3 color inputs, you can simply add the 3rd color*/
// background: linear-gradient(50deg, #FFFF00 , #000000, #FF0000); "
        />
      </div>
    </div>
  );
};

export default Preview;
