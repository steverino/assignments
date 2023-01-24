import React from "react";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import FriendList from "./components/FriendList";

export default function App() {
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
      <FriendList />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
