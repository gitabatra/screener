import NavLink from "./NavLink";
import { Routes } from "../../types";

function Header() {
  return (
    <>
      <header className="navbar">
        <a href={Routes.HOME} className="logo">
          <img alt="logo-image" src="" />
        </a>
        <ul>
          <NavLink href={Routes.HOME}>Home</NavLink>
          <NavLink href={Routes.WATCHLIST}>Watchlist</NavLink>
          <NavLink href={Routes.PORTFOLIO}>Portfolio</NavLink>
        </ul>
      </header>
    </>
  );
}

export default Header;
