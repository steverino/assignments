import React from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import CardList from "./components/CardList";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="container">
      
      <Hero />
      <div className="wrapper">
        <CardList />
      </div>
      
    </div>
  );
}
