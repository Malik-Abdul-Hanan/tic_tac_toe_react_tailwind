import { appContext as AppContext } from "./context";
import React from "react";

const AppState = (props) => {
  return <AppContext.Provider value={{}}>{props.children}</AppContext.Provider>;
};

export default AppState;
