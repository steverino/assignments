import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Main from "./Main";


const Navbar = () => {
  return (
    <>
      <Router>
        <nav className="topnav">
          <Link to="/">Home</Link>
          <Link to="/WorkExperience">Work Experience</Link>
          <Link to="/Education">Education</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/WorkExperience" element={<WorkExperience />} />
          <Route path="/Education" element={<Education />} />
        </Routes>
      </Router>
      
    </>
  );
};

export default Navbar;
