// import { useState, ChangeEvent, MouseEvent } from "react";
import { Bars4Icon } from "@heroicons/react/24/solid";
// import WatchlistView from "./watchlistView";

function DisplayWatchlist(props: {name : any;}){
    return (
   <>
    <div className="flex items-center justify-between px-2 py-3 dark:bg-gray-700 border-b-[1px] border-slate-600">
            <p className="text-lg">{props.name}</p>
            <div className="flex justify-between">
              <a href="/watchlist/watchist-view" className="btn outline outline-offset-2 outline-1 px-4 py-1 text-md">
                Watchlist view
              </a>
              <a href="" className="btn outline outline-offset-2 outline-1 ml-5 px-2 py-1">
                <div className="w-7 h-7">
                  <Bars4Icon />
                </div>
              </a>
            </div>
          </div>
   </>);
}

export default DisplayWatchlist;