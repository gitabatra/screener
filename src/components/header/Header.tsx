import NavLink from "./NavLink";
import { Routes } from "../../types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="shadow-md w-full dark:bg-gray-900 text-white fixed top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="md:px-10 py-6 px-7 md:flex justify-between items-center">
          <div className="flex text-2xl cursor-pointer items-center">
            <img src="" alt="" />
            <span>StockScreener</span>
          </div>

          {/*Menu Icon */}
          <div
            className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
          </div>
          <ul
            className={`md:flex pl-9 md:items-center md:pb-0 pb-12 absolute md:static dark:bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 
          ${isMenuOpen ? "top-12" : "top-[-490px]"}`}
          >
            <NavLink href={Routes.HOME}>Home</NavLink>
            <NavLink href={Routes.WATCHLIST}>Watchlist</NavLink>
            <NavLink href={Routes.PORTFOLIO}>Portfolio</NavLink>
            {}
            <button className="btn bg-sky-500 px-3 py-1 md:ml-8 rounded md:static dark:bg-sky-600 dark:hover:bg-sky-800 dark:focus:ring-sky-800">
              User
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
