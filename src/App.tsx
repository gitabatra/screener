// import * as react from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Search from "./Search"
import CoreWatchlist from "./CoreWatchlist";
import Portfolio from "./Portfolio";
import CreateWatchlist from "./CreateWatchlist";

function App() {

  let Component;
  switch(window.location.pathname){
    case "/":
      Component = <Search />
      break;
    case "/watchlist":
      Component = <CoreWatchlist />
      break;
    case "/portfolio":
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
