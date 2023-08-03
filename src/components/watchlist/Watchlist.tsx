import { useEffect, useState } from "react";
import CreateArea from "./CreateArea";
import DisplayWatchlist from "./DisplayWatchlist";
import { getDataFromLocalStorage } from "../../utils/api";
import { watchlist } from "../../utils/api";


function Watchlist(){
    const [isCreateWLOpen, setIsCreateWLOpen] = useState(false);
   // const [count, setCount] = useState();
    const [watchlists, setWatchlist] = useState(getDataFromLocalStorage());
  
    function showCreateWatchlilst(){
        console.log("create watchlist button ecent is executing....");
        setIsCreateWLOpen(true);
    }

    const addWatchlistName = (watchlistName: string) => {
        //setCount(()=>((watchlists.length)+1));
        console.log("Count: ",watchlists.length);
       // console.log("Count: ",count);
        const watchlistId = "wl-20230727-" + (watchlists.length).toString();
        console.log("Count: ",watchlistId,watchlists.length);
        const watchlist: watchlist = {
            id: watchlistId,
            wlName: watchlistName,
            wlData: []
          }
          setWatchlist([...watchlists,watchlist]);
          console.log(watchlists);
      }

      const deleteWatchlist=(id:string) =>{
         console.log("Delete function is executing....",id);
         const filteredWatchlists: watchlist[] = watchlists.filter((element,index)=>{
            return (id!= element.id)
         })
         console.log("Delete function is executing....",id,filteredWatchlists);
         setWatchlist(filteredWatchlists);
      }

      useEffect(()=>{
        localStorage.setItem("watchlists",JSON.stringify(watchlists));
      },[watchlists]);

    return (<>
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
            watchlists.map((watchlist:object,index:number) => {return  (<DisplayWatchlist key= {index} watchlist={watchlist} deleteWatchlist={deleteWatchlist}/>)})
          }
        </div>
      </div>
    </>);
}

export default Watchlist;