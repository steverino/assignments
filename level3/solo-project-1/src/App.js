import React from "react";

import Image from "./components/Image";
import Info from "./components/Info";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Image />
        <Info />
        <Footer />
      </div>
    </div>
  );
}
