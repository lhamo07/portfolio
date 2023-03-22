import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import SwitchButton from "./SwitchButton";
import "../styles/style.scss";
function Container() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={
        darkMode ? `Container Container-dark` : `Container Container-light`
      }
    >
      <SwitchButton />
    </div>
  );
}

export default Container;
