import React from "react";
import axios from "axios";
import memesData from "../memesData.js";

const baseURL = "https://api.imgflip.com/get_memes"

export default function Meme() {
    const [randImage, setRandImage] = React.useState(
        './logo192.png'
    );
    
    let images = memesData.data.memes;
    const [memes, setMemes] = React.useState([])
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setMemes(response.data.data.memes);
        });
    }, []);
    
    
    function randomImage() {
        let randImg = Math.floor(Math.random() * memes.length);
        const url = memes[randImg].url
        console.log(url)
        setRandImage(url)  
  }

  function topText(){
    
  }
  
  function bottomText(){

  }

  const [myInput, setMyInput] = React.useState({
    topText:"",
    bottomText:""
  })

  function handleChange(event){
    setMyInput((prevInput) => {
        return {
            ...prevInput,
            [event.target.name]: event.target.value,
        }
    })

  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" name="topText" onChange={handleChange} value={myInput.topText} className="form--input" />
        <input type="text" placeholder="Bottom text" name="bottomText" onChange={handleChange} value={myInput.bottomText} className="form--input" />
        <button className="form--button" onClick={randomImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme--image">
        <p className="top-text">{myInput.topText}</p>
        <img src={randImage} alt="random" />
        <p className="bottom-text">{myInput.bottomText}</p>
      </div>
    </main>
  );
}
