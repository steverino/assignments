import React from "react";
import Preview from "./Preview";
import Options from "./Options";


const App = () => {

    const [angle, setAngle] = React.useState(50)

    function getAngle(){
        setAngle(()=>{
            return (
                document.querySelector('.angleInput').value
                
            )
                
        })
    }

    const [color1, setColor1] = React.useState('#000000');
    const [color2, setColor2] = React.useState('#ffffff');
    const [color3, setColor3] = React.useState();

  const changeColor1 = ()=>{
    setColor1(()=>{
      return document.querySelector('#color1').value
    })
  }
  const changeColor2 = ()=>{
    setColor2(()=>{
      return document.querySelector('#color2').value
    })
  }
  const changeColor3 = ()=>{
    setColor3(()=>{
      return document.querySelector('#color3').value
    })
  }

const [hideColor3, setHideColor3] = React.useState(true)

  
const [myVar, setMyVar] = React.useState('block')

  const showColor3 = ()=>{
    if(hideColor3 === true){
      
      setHideColor3(false)
      setMyVar( 'none')
      
    }else if(hideColor3 === false){
      setHideColor3(true)
      setMyVar('block')
      
    }
    
    return myVar
  }
console.log('log '+myVar);
  return (
    <div className="container">
      <div className="wrapper">
        <Preview angle={angle} color1={color1} color2={color2} color3={color3} myVar={myVar} />
        <Options getAngle={getAngle} changeColor1={changeColor1} changeColor2={changeColor2} changeColor3={changeColor3} showColor3={showColor3} myVar={myVar} />
      </div>
      
    </div>
  );
};

export default App;
