// src/hooks/useDarkMode.js

import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode doit être utilisé dans DarkModeProvider");
  }
  return context;
}