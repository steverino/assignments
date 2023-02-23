import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import MemesList from "./components/MemesList";

export default function App() {

  const [memes, setMemes] = React.useState([])

  const editMeme = () => {

  }

  const deleteMeme = (id) => {
    const keptMemes = memes.filter((meme)=> meme.id !== id)
    setMemes(keptMemes)
  }

  return (
    <div className="container">
      <Header />
      <Meme />
     
    </div>
  );
}
