import { useContext, useEffect, useState } from "react";
import { CompanyOverviewData} from "../../types";
import {
  formatNumber,
  getWatchlistsNames,
  insertStockToWatchlist,
} from "../../utils/api";
import { WatchlistContext } from "../Context/WatchlistContext";

interface stockProp {
  id: string;
  result: CompanyOverviewData[];
}

function StockInfo({ id, result }: stockProp) {
  const [isMultipleWatchlists, setMultipleWatchlists] = useState(false);
 
  console.log(id, result);

  const { watchlists } = useContext(WatchlistContext);

  useEffect(()=>{
    localStorage.setItem("watchlists",JSON.stringify(watchlists));
  },[watchlists]);

  console.log("Watchlists from Context: ",watchlists);

  const wlNames = getWatchlistsNames(watchlists);

  function handleMouseEnter(){
    console.log("Handling mouse hover event")
    if (watchlists.length > 1) {
      console.log("CORE WATCHLIST - Length greater than 1");
      setMultipleWatchlists(true);
    } 
  }


  function handleClick() {
    console.log("-----------Watchlists------------", watchlists);
    if (watchlists.length === 1) {
      console.log("CORE WATCHLIST");
      //const watchlistId: string = "wl-20230727-0";
      insertStockToWatchlist("wl-20230727-0", id,result);
    }
  }

  function handleWatchlistSelection(index: number){
    console.log("handle selection of watchlist",index)
    const watchlistID = watchlists[index].id;
    console.log("Selected watchlist ID",watchlistID);
    insertStockToWatchlist(watchlistID, id,result);
  }

  return (
    <>
      <div id="stock-info" className="px-4 min-h-fit mt-20">
      <div className="ml-4 mr-4 pl-4 pt-4 shadow-lg rounded-lg shadow-cyan-500/50">
        <div className="flex justify-end pl-6 pt-8">
          <div className="flex flex-col" onMouseEnter={handleMouseEnter} 
              onMouseLeave={()=>{setMultipleWatchlists(false)}} >
            <button
              className="btn rounded font-medium text-2xl text-white bg-sky-700 px-6 py-4 hover:bg-sky-800"
              onClick={handleClick} 
            >
              <span className="mr-2">Add to watchlist</span>
            </button>
            <div
              className={`company-in-watchlist ${
                isMultipleWatchlists ? "" : "hidden"
              }`}
            >
              <ul className="bg-gray-700 text-center rounded">
                {wlNames.map((element: string, index: number) => {
                  return (
                    <li key={index} className="py-2 hover:bg-gray-800 text-xl" onClick={()=>{handleWatchlistSelection(index)}}>
                      {element}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <h1 className="px-2 py-3 text-xl">
          <b>Company Name </b> &nbsp;
          {result?.[0]?.Name} ({result?.[0]?.Symbol})
        </h1>
        <p className="px-2 pb-7">Current Price - </p>

        <div className="px-2 py-3 text-xl">
          <h1 className="py-2">About</h1>
          {result?.[0].Description}
        </div>
        <div className="border-2 border-gray-600 rounded-lg py-6 px-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <p>
                Market Cap &nbsp; $
                {formatNumber(result?.[0]?.MarketCapitalization)}
              </p>
            </div>
            <div>
              <p>Current Price &nbsp; </p>
            </div>
            <div>
              <p>
                High / Low &nbsp;
                <span>
                  ${result?.[0]?.["52WeekHigh"]} / {result?.[0]?.["52WeekLow"]}
                </span>
              </p>
            </div>
            <div>
              <p>
                Stock P/E &nbsp;
                {result?.[0]?.PERatio}
              </p>
            </div>
            <div>
              <p>
                Book Value &nbsp;
                {result?.[0]?.BookValue}
              </p>
            </div>
            <div>
              <p>
                Dividend Yield &nbsp;
                {result?.[0]?.DividendYield}
              </p>
            </div>
            <div>
              <p>
                ROE TTM &nbsp;
                {result?.[0]?.ReturnOnEquityTTM}
              </p>
            </div>
            <div>
              <p>
                Forward P/E &nbsp;
                {result?.[0]?.ForwardPE}
              </p>
            </div>
            <div>
              <p>
                50 DMA &nbsp;
                {result?.[0]?.["50DayMovingAverage"]}
              </p>
            </div>
            <div>
              <p>
                200 DMA &nbsp;
                {result?.[0]?.["200DayMovingAverage"]}
              </p>
            </div>
            <div>
              <p>
                EPS &nbsp;
                {result?.[0]?.EPS}
              </p>
            </div>
            <div>
              <p>
                ROA TTM &nbsp;
                {result?.[0]?.ReturnOnAssetsTTM}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default StockInfo;
