import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import "../Style/DarkModeToggle.css";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      title={isDarkMode ? "Mode Clair" : "Mode Sombre"}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}