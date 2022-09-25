import Logo from "component/Logo";
import ThemeToggle from "component/ThemeToggle";

import "./Header.scss";

function Header({ theme, changeTheme, cleanFilterParams }) {
  return (
    <header className="header">
      <div className="container flex">
        <Logo cleanFilterParams={cleanFilterParams} />
        <ThemeToggle theme={theme} changeTheme={changeTheme} />
      </div>
    </header>
  );
}

export default Header;
