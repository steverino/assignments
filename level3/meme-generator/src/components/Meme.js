import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
   
let images = memesData.data.memes;

const [randImage, setRandImage] = React.useState([images])

function randomImage(){
    let randImg = images[Math.floor(Math.random()*images.length)]
    setRandImage(randImg.url)
}
    
     
    return (
        <main>
            
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={randomImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
                <div className="meme--image">
                    <img src={randImage} alt="random" />
                </div>
        </main>
    )
}