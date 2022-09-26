import { useContext } from "react";
import ThemeContext from "context/ThemeContext";

import "./ThemeToggle.scss";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? (
        <>
          <i className="far fa-moon"></i>
          Dark Mode
        </>
      ) : (
        <>
          <i className="far fa-sun"></i>
          Light Mode
        </>
      )}
    </button>
  );
}

export default ThemeToggle;
