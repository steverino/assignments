import React from "react";
import Create from "./Create";
import Header from "./Header";
import Images from "./Images";

const App = () => {
const baseURL = 'https://api.vschool.io/sfalvo/thing/'

  return (
    <>
      <div className="container">
        <Header/>
        <Images/>
        <Create />
      </div>
    </>
  );
};

export default App;
