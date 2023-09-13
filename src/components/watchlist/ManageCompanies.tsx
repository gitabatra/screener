import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import SecondaryNavigation from "./SecondaryNavigation";
import {
  getStocksDataFromWatchlist,
  deleteStockFromWatchlist,
  insertStockToWatchlist,
} from "../../utils/localApi";

import {  getCompanyOverviewDataBySymbol } from "../../utils/api";
import { CompanyOverviewData, Stock } from "../../types";
// import SearchBar from "../Home/SearchBar";
import { Company } from "../../types";
import { stockTicker } from "../../utils/api";
import { 
  useEffect,
  // useContext,
  //  useEffect,
   useState } from "react";
import StockData from "./StockData";
import Search from "../Home/Search";
// import { WatchlistContext } from "../Context/WatchlistContext";




function ManageStocks() {

  const { id } = useParams<{ id: string }>();

  console.log("MANAGE COMPANIES: ", id);

  // const { selectedStock, filteredStockList, result, id, addStock, deleteStock} = useContext(WatchlistContext);

  const [filteredList, setFilteredList] = useState<Company[]>([]);
  const [selectedStock, setSelectedStock] = useState("");
  const [result, setResult] = useState<CompanyOverviewData | undefined>();

  const navigate = useNavigate();


  const [filteredStockList, setFilteredStockList] = useState<Stock[]>(
    getStocksDataFromWatchlist(id as string)
  );

  const deleteStock = (stockId: string) => {
    console.log("Delete function is executing....", stockId);
    deleteStockFromWatchlist(id as string, stockId);
    const filteredStocks: Stock[] = filteredStockList.filter((element) => {
      return stockId != element.stockID;
    });
    setFilteredStockList(filteredStocks);
  };

  function fetchCompnayData(input: string){
    console.log("---Input while fetching data: ",input);
    const data = getCompanyOverviewDataBySymbol(input);
    data
      .then((result) => {
        console.log("Data: ", result);
        setSelectedStock(input);
        setResult(result);
       // return result
      })
      .catch((error) => {
        console.log(error);
      });
  }
console.log("and Input is: ",selectedStock)
  const addStock = (stockId: string) =>{
    fetchCompnayData(stockId);
    console.log("Add STock to WL: ",result);
    if(result){
      insertStockToWatchlist(
        id as string,
        selectedStock,
        [result] 
      );
    }
    setFilteredStockList(
      getStocksDataFromWatchlist(id as string)
    );
  }


  useEffect(() => {
    // run something every time name changes
    if(selectedStock!=="") {
    fetchCompnayData(selectedStock)
    if(result!== undefined || result!== null){
      console.log("Result is not undefined or null");
      insertStockToWatchlist(
        id as string,
        selectedStock,
        [result as CompanyOverviewData] 
      );
    }
  }
}, [id, selectedStock, result]); // <-- dependency array


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
                  <Search
                    placeholder="Search for a company..."
                    data={stockTicker as Company[]}
                    value={selectedStock}
                    setFilteredList={setFilteredList}
                  />
                  {filteredList.length !== 0 && (
                    <div className="grid grid-cols-1 divide-y divide-gray-700 rounded-lg shadow w-70 dark:bg-gray-700 z-10 h-40 overflow-y-auto absolute">
                      {filteredList.map((value, index) => {
                        return (
                          <div key={index}>
                            <div
                              className="px-2 py-1 hover:bg-gray-500"
                              key={index}
                              onClick={() => {
                                addStock(value?.symbol);
                                console.log("DATA in MANAGE Companies----",selectedStock)
                                setFilteredList([]);
                              }}
                            >
                              {value?.name}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div className="py-4 px-2">
                <button className="btn bg-sky-600 text-xl px-5 py-3 rounded hover:bg-sky-800 ml-3" onClick={()=>{navigate(`/watchlist/${id as string}`)}}>
                  Done
                </button>
              </div>
            </form>
            {/* {result ?  */}
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 py-5 px-5">
             {filteredStockList.map((stock, index) => {
               return (
                 <StockData
                   key={index}
                   stock={stock as unknown as Stock}
                   deleteStock={deleteStock}
                 />
               );
             })}
           </div>
           {/* :
           <div></div>}
            */}

          </div>
        </div>
      </div>
    </>
  );
}

export default ManageStocks;
