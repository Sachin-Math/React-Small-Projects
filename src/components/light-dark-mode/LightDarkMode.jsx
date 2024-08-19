import React from "react";
import "./theme.css";
import UseLocalStorage from "./UseLocalStorage";

function LightDarkMode() {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");
  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!!</p>
        <button onClick={handleToggleTheme}>change theme</button>
      </div>
    </div>
  );
}

export default LightDarkMode;
