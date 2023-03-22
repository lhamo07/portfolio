import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
function SwitchButton() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <div className="Lightswitch">
      <div className="Lightswitch">
        <img
          src={
            darkMode
              ? `../img/lightswitch-off.png`
              : `../img/lightswitch-on.png`
          }
          alt="Lightswitch on"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

// Light Switch design by Jeremy Loyd, US - Public Domain
export default SwitchButton;
