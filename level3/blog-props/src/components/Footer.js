import React from "react";

export default function Footer() {
  let date = new Date();

  return (
    <div className="footer">
      <div className="icons">
        <ul>
            <li><img src="./images/facebook.png" alt="" /></li>
            <li><img src="./images/linkedin.png" alt="" /></li>
            <li><img src="./images/github.png" alt="" /></li>
            
        </ul>
      </div>
      <div className="copy">Copyright &copy; Stevefalvo.com {date.getFullYear()} </div>
    </div>
  );
}
