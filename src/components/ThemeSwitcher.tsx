import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeSwitcher: React.FC<{}> = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
      setDarkMode(isDarkMode);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button onClick={toggleDarkMode} className="ThemeSwitcher">
      {darkMode ? (
        <SunIcon className="h-3 lg:h-5" />
      ) : (
        <MoonIcon className="h-3 lg:h-5" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
