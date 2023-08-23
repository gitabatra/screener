// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import SecondaryNavigation from "./SecondaryNavigation";
import { getStocksDataFromWatchlist } from "../../utils/api";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Stock } from "../../types";
import SearchBar from "../Home/SearchBar";
import {Company} from "../../types";
import {stockTicker} from "../../utils/api";
import { useState } from "react";


interface stockProp {
  stock: Stock
}

function StockData({stock}: stockProp){
  console.log("Stocks in managecompanies: ",stock);
  return (<>
   <div className="flex justify-between items-center pb-4 border-b-2 border-gray-600">
            <p>{stock.stockName}</p>
          <button className="w-5 h-5"><TrashIcon /></button>
  </div>
  </>)
}


function ManageCompanies() {
  const [input,setInput] = useState("");
  const { id } = useParams<{id: string}>();
  const stocksList =  getStocksDataFromWatchlist(id as string);
  console.log("Watchlist data in Manage Companies: ",stocksList,"INPUT-------",input);

  // function handleChange(){
  //   console.log("--Change in searchbar--: ");
  // }

  return (
  
    <>
      <div className="container mx-auto py-10">
      <SecondaryNavigation watchlistID={id as string} />
      <div className="mt-10 border border-gray-700 rounded-lg shadow">
        <div className="py-10 px-5">
          <h1 className="text-xl">Add Companies to Core Watchliat</h1>
        </div>
        <div className="items-center justify-center py-10 container mx-auto">
          <form className="text-left">
            <div className="mx-auto flex-inline items-center justify-center px-4 py-4 text-xl">
              <p className="text-md mr-5 pb-2">Company Name </p>
              <div className="w-full">
              <SearchBar placeholder="Search for a company..." data={stockTicker as Company[]} value={input} setInput={setInput} 
             />
              </div>
            </div>
            <div className="py-4 px-4">
              <button className="btn bg-sky-600 text-xl px-5 py-3 rounded hover:bg-sky-800 ml-3">
                Done
              </button>
            </div>
          </form>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 py-5 px-5">
          {
            stocksList.map((stock, index) => {return(<StockData key={index} stock={stock as unknown as Stock} />)})
          }
        </div>
        </div>
        
        </div>
      </div>
    </>
  );
}

export default ManageCompanies;
