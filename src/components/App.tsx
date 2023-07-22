// import * as react from 'react'
import Header from "./header/Header"
import Footer from "./Footer"
import CoreWatchlist from "./CoreWatchlist";
import Portfolio from "./Portfolio";
import CreateWatchlist from "./CreateWatchlist";
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
      Component = <CreateWatchlist />
    //no default
  }

  return (
    <>
      <div>
        <Header />
        <div className="w-full h-screen mt-10 h-screen">
        { Component }
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
