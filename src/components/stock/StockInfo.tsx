import { useContext, useEffect, useState } from "react";
import { CompanyOverviewData } from "../../types";
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
  const [showMore, setShowMore] = useState(false);

  console.log(id, result);

  const { watchlists } = useContext(WatchlistContext);

  useEffect(() => {
    localStorage.setItem("watchlists", JSON.stringify(watchlists));
  }, [watchlists]);

  console.log("Watchlists from Context: ", watchlists);

  const wlNames = getWatchlistsNames(watchlists);

  function handleMouseEnter() {
    console.log("Handling mouse hover event");
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
      insertStockToWatchlist("wl-20230727-0", id, result);
    }
  }

  function handleWatchlistSelection(index: number) {
    console.log("handle selection of watchlist", index);
    const watchlistID = watchlists[index]?.id;
    console.log("Selected watchlist ID", watchlistID);
    insertStockToWatchlist(watchlistID, id, result);
  }

  return (
    <>
     {/* shadow-inner rounded-lg shadow-sky-500/50  */}
      <div id="stock-info" className="px-4 mt-20">
        <div className="ml-4 mr-4 py-6 px-4 ">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h1 className="px-2 py-3 text-4xl"> 
                {/* <b>Company Name </b> &nbsp; */}
                {result?.[0]?.Name} ({result?.[0]?.Symbol}) <span className="text-slate-500 text-xl">{result?.[0]?.Exchange}</span>
              </h1>
              <p className="px-2 pb-2 text-slate-500">Current Price - </p>
              <p className="px-2 pb-7 text-slate-500">Currency - {result?.[0]?.Currency}</p>
            </div>

            <div>
              <div className="flex justify-end pl-6 pt-8">
                <div
                  className="flex flex-col pr-4"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={() => {
                    setMultipleWatchlists(false);
                  }}
                >
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
                    <ul className="bg-gray-700 text-center rounded absolute">
                      {wlNames.map((element: string, index: number) => {
                        return (
                          <li
                            key={index}
                            className="py-2 px-10 hover:bg-gray-800 text-xl"
                            onClick={() => {
                              handleWatchlistSelection(index);
                            }}
                          >
                            {element}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-2">
            <div className="col-span-2 border-2 border-gray-600 rounded-lg py-6 px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 gap-8">
                <div className="flex justify-between text-xl py-3 px-2 bg-gray-700 rounded">
                    <span className="text-slate-500">
                      Market Cap
                    </span>
                    <span className="text-zinc-300">$ {formatNumber(result?.[0]?.MarketCapitalization)}</span>   
                </div>
                <div className="flex justify-between text-xl py-3 px-2 bg-gray-700 rounded">
                    <span className="text-slate-500">
                      Current Price
                    </span>
                    <span className="text-zinc-300"></span>
                </div>
                <div className="flex justify-between text-xl py-3 px-2 bg-gray-700 rounded">
                    <span className="text-slate-500">High / Low &nbsp;</span>
                    <span className="text-zinc-300">$ {result?.[0]?.["52WeekHigh"]} / {result?.[0]?.["52WeekLow"]}</span>
                </div>
                <div className="flex justify-between text-xl py-3 px-2 bg-gray-700 rounded">
                    <span className="text-slate-500"> Stock P/E &nbsp;</span>
                    <span className="text-zinc-300">{result?.[0]?.PERatio}</span>
                </div>
                <div className="flex justify-between text-xl py-3 px-2 bg-gray-700 rounded">
                    <span className="text-slate-500"> Book Value &nbsp; </span>
                    <span className="text-zinc-300">{result?.[0]?.BookValue}</span>
                </div>
                <div className="flex justify-between text-xl py-3 px-2 bg-gray-700 rounded">
                    <span className="text-slate-500">
                      Dividend Yield 
                    </span>
                    <span className="text-zinc-300">{result?.[0]?.DividendYield}</span>
                </div>
                <div className="flex justify-between text-xl py-3 px-2 bg-gray-700 rounded">
                    <span className="text-slate-500">
                      {" "}
                      Dividend Per Share &nbsp;{" "}
                    </span>
                    <span className="text-zinc-300">{result?.[0]?.DividendPerShare}</span>
                </div>
                <div className="flex justify-between text-xl py-3 px-2 bg-gray-700 rounded">
                    <span className="text-slate-500">ROE TTM &nbsp;</span>
                    <span className="text-zinc-300">{result?.[0]?.ReturnOnEquityTTM}</span>
                </div>
                <div className="flex justify-between text-xl py-3 px-2 bg-gray-700 rounded">
                    <span className="text-slate-500">Forward P/E &nbsp;</span>
                    <span className="text-zinc-300">{result?.[0]?.ForwardPE}</span>
                </div>
                <div className="flex justify-between text-xl py-3 px-2 bg-gray-700 rounded">
                    <span className="text-slate-500">Trailing P/E &nbsp;</span>
                    <span className="text-zinc-300">{result?.[0]?.TrailingPE}</span>
                </div>
                <div className="flex justify-between text-xl py-3 px-2 bg-gray-700 rounded">
                    <span className="text-slate-500">
                      Price to Book Ratio &nbsp;
                    </span>
                    <span className="text-zinc-300">{result?.[0]?.PriceToBookRatio}</span>
                </div>
                <div className="flex justify-between text-xl py-3 px-2 bg-gray-700 rounded">
                    <span className="text-slate-500">
                      Price to Sales Ratio TTM&nbsp;
                    </span>
                    <span className="text-zinc-300">{result?.[0]?.PriceToSalesRatioTTM}</span>
                </div>
                <div className="flex justify-between text-xl py-3 px-2 bg-gray-700 rounded">
                    <span className="text-slate-500"> 50 DMA </span>
                    <span className="text-zinc-300">$ {result?.[0]?.["50DayMovingAverage"]}</span>
                </div>
                <div className="flex justify-between text-xl py-3 px-2 bg-gray-700 rounded">
                    <span className="text-slate-500"> 200 DMA </span>
                    <span className="text-zinc-300">$ {result?.[0]?.["200DayMovingAverage"]}</span>
                </div>
                <div className="flex justify-between text-xl py-3 px-2 bg-gray-700 rounded">
                    <span className="text-slate-500">EPS</span>
                    <span className="text-zinc-300">{result?.[0]?.EPS}</span>
                </div>
                <div className="flex justify-between text-xl py-3 px-2 bg-gray-700 rounded">
                    <span className="text-slate-500"> ROA TTM </span>
                    <span className="text-zinc-300">{result?.[0]?.ReturnOnAssetsTTM}</span>
                </div>
              </div>
              {/* </div> */}
            </div>

           
              <div className="px-2 py-3 md:order-first lg:order-last">
                <div className="pb-6">
                <h1 className="py-2 text-3xl uppercase">About</h1>
                <span className="text-zinc-400">{showMore ? result?.[0].Description :result?.[0].Description.substring(0,300)}</span>
                <div className="py-4">
                <a href="#" className={`text-sky-600 uppercase py-4`}  onClick={()=>{setShowMore(true)}} hidden= {showMore ? true : false}>Read More</a>
                </div>
                </div>
                <div className="flex justify-between text-lg py-3 px-2 bg-gray-700 rounded mb-4">
                  <span className="text-slate-500 uppercase"> Sector</span>
                    <span className="text-zinc-300 text-md">{result?.[0]?.Sector}</span>
                </div>
                <div className="flex justify-between text-lg py-3 px-2 bg-gray-700 rounded">
                  <span className="text-slate-500 uppercase"> Industry</span>
                    <span className="text-zinc-300 text-md">{result?.[0]?.Industry}</span>
                </div>
               
              </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default StockInfo;
