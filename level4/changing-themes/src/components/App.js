import React, {useContext} from "react";
import Page from "./Page";
import Footer from "./Footer";
import Header from "./Header"
import {ThemeContext} from './themeContext';

function App() {
  const context = useContext(ThemeContext)
  if(context.color === 'dark'){
    return (
      <>
        
          <Footer/>
          <Page />
          <Header />
        
      </>
    );    
  }else{
    return (
      <>
        
          <Header />
          <Page />
          <Footer/>
        
      </>
    );
  }
  
}

export default App;
