// import * as react from 'react'
import Header from "./header/Header"
import Footer from "./Footer"
import CoreWatchlist from "./watchlist/CoreWatchlist";
import Portfolio from "./portfolio/Portfolio";
// import CreateWatchlist from "./watchlist/CreateWatchlist";
import { Routes } from "../types";
import HomeSearch from "./Home/HomeSearch";

function App() {

  let Component;
  switch(window.location.pathname){
    case Routes.HOME:
      Component = <HomeSearch />
      break;
    case Routes.WATCHLIST:
      Component = <CoreWatchlist />
      break;
    case Routes.PORTFOLIO:
      Component = <Portfolio />
      break;
    case "/create-watchlist":
      Component = <CoreWatchlist />
    //no default
  }

  return (
    <>
      <div>
        <Header />
        <div className="w-full h-screen mt-10 h-screen bg-gray-800 text-white">
          { Component }
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
