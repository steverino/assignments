import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

function Button(props) {
  const { selectTheme } = useContext(ThemeContext);
  
  return (
    <>
      
      <div>
        <select  onChange={selectTheme}>
        <option value="">--Choose Theme--</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="other">Other</option>
        </select>
      </div>
    </>
  );
}

export default Button;
