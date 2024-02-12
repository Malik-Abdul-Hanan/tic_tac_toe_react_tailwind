import { themeContext as ThemeContext } from "./context";
import React from "react";

const ThemeState = (props) => {
  return (
    <ThemeContext.Provider value={{}}>{props.children}</ThemeContext.Provider>
  );
};

export default ThemeState;
