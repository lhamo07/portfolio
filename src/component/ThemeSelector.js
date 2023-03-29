import React from "react";
import modeIcon from "../assets/images/mode.svg";
import useTheme from "../hooks/useTheme";
import "../styles/style.scss";
const ThemeSelector = () => {
  const { mode, changeMode } = useTheme();
  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  console.log(mode);
  return (
    <div className="div theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          alt="dark and light mode"
          onClick={toggleMode}
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
    </div>
  );
};

export default ThemeSelector;
