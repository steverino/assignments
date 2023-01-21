import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bloglist from "./components/Bloglist";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Bloglist />
      <Footer />
    </div>
  );
}
