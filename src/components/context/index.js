import React, { useState } from "react";

export const AppContext = React.createContext();

export const Provider = (props) => {
  return <AppContext.Provider value={{}}>{props.children}</AppContext.Provider>;
};
