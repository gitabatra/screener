// import * as react from 'react'
import Header from "./header/Header"
import Footer from "./Footer"
import Search from "./Search"
import CoreWatchlist from "./CoreWatchlist";
import Portfolio from "./Portfolio";
import CreateWatchlist from "./CreateWatchlist";
import { Routes } from "../types";

function App() {

  let Component;
  switch(window.location.pathname){
    case Routes.HOME:
      Component = <Search />
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
        { Component }
        <Footer/>
      </div>
    </>
  )
}

export default App
