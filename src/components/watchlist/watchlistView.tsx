import SecondaryNavigation from "./SecondaryNavigation";
import { useParams, useNavigate } from "react-router-dom";
import { getWatchlistDataById, getStocksDataFromWatchlist, formatNumber } from "../../utils/api";




function WatchlistView() {
  const { id } = useParams<{id: string}>();
  const navigate = useNavigate();
  console.log("Id in Watchlist-view: ",id);
  const watchlistData = getWatchlistDataById(id as string);
  const stocksList =  getStocksDataFromWatchlist(id as string);

  return (
    <>
      <div className="container mx-auto py-12 items-center">
      <SecondaryNavigation watchlistID={id as string} />
        {/* <h1 className="text-xl">Watchlist View</h1> */}
        <div className="flex items-center justify-between px-0 py-10">
          <p className="text-lg"> {watchlistData?.[0]?.wlName} </p>
          <button className="inline-flex items-center justify-center btn outline px-4 py-2 text-lg" onClick={()=>{navigate(`/watchlist/${id as string}/manage-companies`)}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
            <span className="uppercase">Companies</span>
          </button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-2 py-3">Stock Name</th>
            <th scope="col" className="px-2 py-3">CMP</th>
            <th scope="col" className="px-2 py-3">MarketCap</th>
            <th scope="col" className="px-2 py-3">Dividend Yield</th>
            <th scope="col" className="px-2 py-3">EPS</th>
            <th scope="col" className="px-2 py-3">PE</th>
            <th scope="col" className="px-2 py-3">Book value</th>
            <th scope="col" className="px-2 py-3">Profit Margin</th>
            <th scope="col" className="px-2 py-3">P/B Ratio</th>
            <th scope="col" className="px-2 py-3">P/S Ratio TTM</th>
            <th scope="col" className="px-2 py-3">ROE</th>
            <th scope="col" className="px-2 py-3">52-Week High/Low</th>
            </tr>
        </thead>
            <tbody>
               {
                    stocksList.map((result,index) =>{
                        console.log("element",result)
                        return( 
                        <tr key={index}>
                              <td scope="col" className="px-2 py-3">{result.stockName}</td>
                              <td scope="col" className="px-2 py-3">{result.cmp}</td>
                              <td scope="col" className="px-2 py-3">{formatNumber(result.marketCap)}</td>
                              <td scope="col" className="px-2 py-3">{result.dividendYield}</td>
                              <td scope="col" className="px-2 py-3">{result.eps}</td>
                              <td scope="col" className="px-2 py-3">{result.pe}</td>
                              <td scope="col" className="px-2 py-3">{result.bookValue}</td> 
                              <td scope="col" className="px-2 py-3">{result.ProfitMargin}</td>
                              <td scope="col" className="px-2 py-3">{result.priceToBookRatio}</td>
                              <td scope="col" className="px-2 py-3">{result.priceToSalesRatioTTM}</td>
                              <td scope="col" className="px-2 py-3">{result.roe}</td>
                              <td scope="col" className="px-2 py-3">{result.weekHigh_52} / {result.weekLow_52}</td>
                        </tr>)
                    })
                }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default WatchlistView;