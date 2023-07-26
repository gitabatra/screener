import { useState } from "react";
import CreateArea from "./CreateArea";
import DisplayWatchlist from "./DisplayWatchlist";

function Watchlist() {
    const [isCreateWLOpen, setIsCreateWLOpen] = useState(false);
    const [watchlist, setWatchlist] = useState(['Core Watchlist']);
  
    function showCreateWatchlilst(){
        console.log("create watchlist button ecent is executing....");
        setIsCreateWLOpen(true);
    }

    const addWatchlistName = (wlName: string) => {
        watchlist.push(wlName);
        setWatchlist(watchlist);
        console.log(watchlist);
    }

   

  
  return (
      <div className="container mx-auto items-center">
        <div className="mt-10">
          <div className="pt-20 flex justify-center items-center py-6">
            <button
              className="inline-flex items-center justify-center btn rounded font-medium text-2xl text-white bg-sky-700 px-6 py-4 hover:bg-sky-800"
              onClick = {showCreateWatchlilst}
            ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          
              <span className="mr-2">Create new watchlist</span>
            </button>
          </div>
          {
            isCreateWLOpen ? <CreateArea  setIsCreateWLOpen= {setIsCreateWLOpen}  setWatchlistName={ addWatchlistName }/> : ""
          }
          {
            watchlist.map((wlItem,index) =>{
                return (<DisplayWatchlist key= {index} name={wlItem} />);
            })
          }
        </div>
      </div>
  )
}

export default Watchlist
