// import * as react from 'react'
import Header from "./header/Header"
import Footer from "./Footer"
import Watchlist from "./watchlist/Watchlist";
import Portfolio from "./portfolio/Portfolio";
import { Routes } from "../types";
import HomeSearch from "./Home/HomeSearch";
import WatchlistView from "./watchlist/watchlistView";
import ManageCompanies from "./watchlist/ManageCompanies";

function App() {

  let Component;
  switch(window.location.pathname){
    case Routes.HOME:
      Component = <HomeSearch />
      break;
    case Routes.WATCHLIST:
      Component = <Watchlist />
      break;
    case Routes.PORTFOLIO:
      Component = <Portfolio />
      break;
    case "/create-watchlist":
      Component = <Watchlist />
      break;
    case "/watchlist/watchist-view":
        Component = <WatchlistView />
        break;
    case "/watchlist/manage-companies":
        Component = <ManageCompanies />
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
