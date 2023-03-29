import React, { createContext, useReducer, useState } from "react";

export const ThemeContext = createContext();
const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};
const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { mode: "dark" });
  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  return (
    // wrap object value in state and pass state object as a value in provider
    <ThemeContext.Provider value={{ ...state, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
