import React from "react";
import Preview from "./Preview";
import Options from "./Options";

const App = () => {

    const [angle, setAngle] = React.useState(0)

    function getAngle(){
        setAngle(()=>{
            return (
                document.querySelector('.angleInput').value
                
            )
                
        })
    }

  return (
    <div className="container">
      <div className="wrapper">
        <Preview angle={angle} />
        <Options getAngle={getAngle} />
      </div>
    </div>
  );
};

export default App;
