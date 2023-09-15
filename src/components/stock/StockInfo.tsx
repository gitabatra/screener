import { useContext, useEffect, useState } from "react";
import { CompanyOverviewData } from "../../types";
import {
  formatNumber,
  getWatchlistsNames,
  insertStockToWatchlist,
} from "../../utils/localApi";
import { WatchlistContext } from "../Context/WatchlistContext";
import CompanyAboutInfo from "./CompanyAboutInfo";



interface StockGridProp {
    label: string
    value: string | number
}
function StockGridData({label, value}: StockGridProp){
    return (
        <div className="flex justify-between text-xl py-3 px-2 bg-gray-700 rounded">
        <span className="text-slate-500">{label}</span>
        <span className="text-zinc-300"> {value}</span>   
    </div>
    );
}

interface StockProp {
  id: string;
  result: CompanyOverviewData;
}

function StockInfo({ id, result }: StockProp) {
  const [isMultipleWatchlists, setMultipleWatchlists] = useState(false);

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
      //const watchlistId: string = "wl-20230727-0";result={result ? [result] : []}

      insertStockToWatchlist("wl-20230727-0", id, [result]);
    }
  }

  function handleWatchlistSelection(index: number) {
    console.log("handle selection of watchlist", index);
    const watchlistID = watchlists[index]?.id;
    console.log("Selected watchlist ID", watchlistID);
    insertStockToWatchlist(watchlistID, id, [result]);
  }

//   const resultToDisplay = result[0];

  // Null/undefined check, return empty display
  if (!result) {
    return <div className="w-full flex justify-center items-center h-screen">
    <div className="flex items-center justify-center ">
        <div className="w-60 h-60 border-t-4 border-b-8 border-sky-500 rounded-full animate-spin"></div>
    </div>
</div>
  }

  return (
    <>
     {/* shadow-inner rounded-lg shadow-sky-500/50  */}
      <div id="stock-info" className="px-4 mt-20">
        <div className="ml-4 mr-4 py-6 px-2">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h1 className="py-3 text-md sm:text-2xl md:text-4xl lg:text-5xl"> 
                {result.Name} ({result.Symbol}) <span className="text-slate-500 text-xl">{result.Exchange}</span>
              </h1>
              <p className="pb-2 text-slate-500">Current Price - </p>
              <p className="pb-7 text-slate-500">Currency - {result.Currency}</p>
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
                    className="btn rounded font-medium text-sm sm:text-md md:text-xl text-white bg-sky-700 px-6 py-4 hover:bg-sky-800"
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
                            className="text-sm sm:text-md md:text-xl text-white border-2 border-gray-500 px-6 py-2 hover:bg-sky-600 hover:border-sky-600"
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
                 <StockGridData label= {"Market Cap"} value = {`$ ${formatNumber(result.MarketCapitalization)}`} />
                 <StockGridData label= {"Current Price"} value = {" "} />
                 <StockGridData label= {"High / Low"} value = {`$ ${result["52WeekHigh"]} / ${result["52WeekLow"]}`}  />
                 <StockGridData label= {"Stock P/E"} value = {result.PERatio} />
                 <StockGridData label= {"Book Value"} value = {result.BookValue} />
                 <StockGridData label= {"Dividend Yield"} value = {result.DividendYield} />
                 <StockGridData label= {"Dividend Per Share"} value = {result.DividendPerShare} />
                 <StockGridData label= {"ROE TTM"} value = {result.ReturnOnEquityTTM} />
                 <StockGridData label= {"Forward P/E"} value = {result.ForwardPE} />
                 <StockGridData label= {"Trailing P/E"} value = {result.TrailingPE} />
                 <StockGridData label= {"Price to Book Ratio"} value = {result.PriceToBookRatio} />
                 <StockGridData label= {"Price to Sales Ratio TTM"} value = {result.PriceToSalesRatioTTM} />
                 <StockGridData label= {"50 DMA"} value = {result["50DayMovingAverage"]} />
                 <StockGridData label= {"200 DMA"} value = {result["200DayMovingAverage"]} />
                 <StockGridData label= {"EPS"} value = {result.EPS} />
                 <StockGridData label= {"ROA TTM"} value = {result.ReturnOnAssetsTTM} />
              </div>
            </div>
           <CompanyAboutInfo description={result?.Description} sector={result.Sector} industry={result.Industry} />
          </div>
        </div>
      </div>
    </>
  );
}

export default StockInfo;
