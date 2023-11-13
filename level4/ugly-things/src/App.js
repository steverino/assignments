import React, { createContext, useState } from "react";
import Header from "./components/Header";
import './App.css';
import Footer from "./components/Footer";


export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState("logged In User");
  return (
    <>
      <div className="wrapper">
        <UserContext.Provider value={user}>
          <Header />
        </UserContext.Provider>
        <Footer />
      </div>
    </>
  );
};

export default App;
