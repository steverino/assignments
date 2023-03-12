import React, { useState } from "react";
import Page from "./Page";
import Footer from "./Footer";
import Header from "./Header";
import {ThemeContextProvider} from "./themeContext";

function App(props) {
  
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <Page />
        <Footer/>
      </ThemeContextProvider>
    </>
  );
}

export default App;
