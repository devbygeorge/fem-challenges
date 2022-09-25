import "./ThemeToggle.scss";

function ThemeToggle({ theme, changeTheme }) {
  return (
    <button className="theme-toggle" onClick={changeTheme}>
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
