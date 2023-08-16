
import { StockData } from "../../types";

// import { StockContext } from "../Home/StockContext";

interface stockProp {
  id: string;
  result: StockData[]
}

function StockInfo({ id, result }: stockProp) {
  console.log(id,result)
  return (
    <>
      <div id="stock-info" className="px-4 min-h-screen mt-20">
        <div className="flex justify-end pl-6 pt-10">
          <button className="btn rounded font-medium text-2xl text-white bg-sky-700 px-6 py-4 hover:bg-sky-800">
            <span className="mr-2">Add to watchlist</span>
          </button>
        </div>
        <h1 className="px-2 py-3 text-xl">
          <b>Company Name -</b>
          {result?.[0]?.Name} ({result?.[0]?.Symbol})
        </h1>
        <p className="px-2 pb-7">Current Price - </p>
        <div className="border-2 border-gray-600 rounded-lg py-6 px-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <p>Market Cap - $
                {parseInt(result?.[0]?.MarketCapitalization)}
                </p>
            </div>
            <div>
              <p>Current Price - </p>
            </div>
            <div>
              <p>
                High / Low - $ 
                {result?.[0]?.["52WeekHigh"]} / {result?.[0]?.["52WeekLow"]}
              </p>
            </div>
            <div>
              <p>Stock P/E - 
                {result?.[0]?.PERatio}
                </p>
            </div>
            <div>
              <p>Book Value -
              {result?.[0]?.BookValue}
                 </p>
            </div>
            <div>
              <p>Dividend Yield - 
              {result?.[0]?.DividendYield}
              </p>
            </div>
            <div>
              <p>ROE TTM -
              {result?.[0]?.ReturnOnEquityTTM}
              </p>
            </div>
            <div>
              <p>ROE - 
              {/* {result?.[0]?.Retu} */}
              </p>
            </div>
            <div>
              <p>50 DMA - 
              {result?.[0]?.["50DayMovingAverage"]}
              </p>
            </div>
            <div>
              <p>200 DMA - 
              {result?.[0]?.["200DayMovingAverage"]}
              </p>
            </div>
            <div>
              <p>EPS -  
              {result?.[0]?.EPS}
              </p>
            </div>
            <div>
              <p>ROA TTM -
              {result?.[0]?.ReturnOnAssetsTTM}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StockInfo;
