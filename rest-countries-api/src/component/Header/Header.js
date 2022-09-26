import Logo from "component/Logo";
import ThemeToggle from "component/ThemeToggle";

import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container flex">
        <Logo />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
