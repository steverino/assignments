import React from "react";

const Options = ({
  
  getAngle,
  changeColor1,
  changeColor2,
  changeColor3,
  showColor3,
  myVar,
}) => {

  
  return (
    
    <div className="options">
      Options
      <div className="angle">
        <label htmlFor="angle">Angle</label>
        <input
          className="angleInput"
          type="number"
          name="degree"
          onChange={() => getAngle()}
          min="0"
          max="359"
        />
        Number between 0 - 359
      </div>
      <div className="color1 color-box">
        {/* COLOR1 */}
        <label htmlFor="color1">Color 1</label>
        <input
          id="color1"
          type="color"
          name="color1"
          onChange={() => changeColor1()}
        />
      </div>
      <div className="color2 color-box">
        {/* COLOR2 */}
        <label htmlFor="color2">Color 2</label>
        <input
          id="color2"
          type="color"
          name="color2"
          onChange={() => changeColor2()}
        />
      </div>
      <hr />
      <div className="color3 color-box">
        {/* COLOR3 */}
        <label htmlFor="color3">Color 3</label>
        <input
          id="color3"
          type="color"
          name="color3"
          onChange={() => changeColor3()}
        />
        <input type="checkbox" name="add3" id="add3" onChange={showColor3}/>
      <div id="overlay" style={{display: myVar }}  ></div>
      </div>
    </div>
  );
};

export default Options;
