import React, { useState } from "react";

const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const [color, setColor] = useState("");

  const selectTheme = (event) => {
    setColor(event.target.value);
  };

  return (
    <ThemeContext.Provider
      value={{
        color: color,
        selectTheme: selectTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
