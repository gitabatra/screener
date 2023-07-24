// import { useState, ChangeEvent, MouseEvent } from "react";
import { Bars4Icon } from "@heroicons/react/24/solid";

function CreateWatchlist(props: {name : any;}){
    return (
   <>
    <div className="flex items-center justify-between px-0 py-6">
            <p className="text-lg">{props.name}</p>
            <div className="flex justify-between">
              <a href="" className="btn outline px-4 py-2 text-lg">
                Watchlist view
              </a>
              <a href="" className="btn outline ml-5 px-2 py-2">
                <div className="w-7 h-7">
                  <Bars4Icon />
                </div>
              </a>
            </div>
          </div>
   </>);
}

export default CreateWatchlist;