// import { useState, ChangeEvent, MouseEvent } from "react";
import { ListBulletIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { Watchlist } from "../../types";


interface DisplayWatchlistProps {
  watchlist : Watchlist;
  deleteWatchlist: (id: string) => void;
}

function DisplayWatchlist({watchlist,deleteWatchlist}: DisplayWatchlistProps){
  const navigate = useNavigate();
  
    return (
   <>
    <div className="flex items-center justify-between px-2 py-3 dark:bg-gray-700 border-b-[1px] border-slate-600">
            <p className="text-lg">{watchlist.wlName}</p>
            <div className="flex justify-between">
         
              <button className="btn outline outline-offset-2 outline-1 px-4 py-1 text-md" onClick={()=>{navigate(`/watchlist/${watchlist.id}`)}}>
                Watchlist view
              </button>

              <button className="btn outline outline-offset-2 outline-1 ml-5 px-2 py-1" onClick={()=>{navigate(`/watchlist/${watchlist.id}/manage-companies`)}}>
                <div className="w-7 h-7">
                  <ListBulletIcon />
                </div>
              </button>

              <button className="w-7 h-7 ml-5 py-1" onClick={()=>{deleteWatchlist(watchlist.id)}} hidden={ watchlist.id === "wl-20230727-0"? true : false} >
                <TrashIcon />
              </button>
          
            </div>
          </div>
   </>);
}

export default DisplayWatchlist;