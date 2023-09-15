/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useState, ChangeEvent, MouseEvent } from "react";

interface CreateAreaProps {
  setIsCreateWLOpen: (open: boolean) => void;
  setWatchlistName: (name: string) => void;
}

function CreateArea({setIsCreateWLOpen, setWatchlistName}: CreateAreaProps){
    
    const [wlName, setWLName] = useState("");

    function handleChangeWL(event: ChangeEvent<HTMLInputElement>){
        setWLName(event.target.value);
    }

    function handleSaveWL(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        setWatchlistName(wlName);
        setWLName('');
    }
    return (
        <>
         <div className="flex-inline items-center justify-center py-10">
            <form className="flex items-center justify-center">
            <div className="relative w-80">
              <input
                type="text"
                id="watchlist-name"
                onChange={ handleChangeWL }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Watchlist name"
                value= {wlName}
                required = {true}
              />
            </div> 
            <div className="flex">
              <button className="btn bg-sky-600 px-3 py-2 rounded hover:bg-sky-800 ml-3" onClick= {handleSaveWL}>Save</button>
              <button className="btn outline px-2 py-0 rounded ml-3" onClick= {()=> {setIsCreateWLOpen(false)}}>Cancel</button>
            </div>
            </form>
            </div>
        </>
    );
}

export default CreateArea