import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

export default function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Meme />
      </div>
    </div>
  );
}
