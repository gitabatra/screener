import { createContext, useEffect, useState } from "react";
import { Stock, Watchlist } from "../../types";
import { 
  deleteStockFromWatchlist, 
  getDataFromLocalStorage, 
  getStocksDataFromWatchlist, insertStockToWatchlist 
} from "../../utils/localApi";
import { getCompanyOverviewDataBySymbol } from "../../utils/api";


export interface WatchlistContextInterface {
    watchlists: Watchlist[];
    addWatchlistName: (name: string) => void;
    deleteWatchlist: (id: string) =>void;
    selectedStock: string;
    filteredStockList: Stock[];
    setId: (id: string) =>void;
    addStock:  (stockId: string) => void;
    deleteStock: (stockId: string) => void;
  }
   
  export const WatchlistContextDefaultValue: WatchlistContextInterface = {
    watchlists: getDataFromLocalStorage(),
    addWatchlistName: () => { },
    deleteWatchlist: () => { },
    selectedStock: "",
    setId: () => {},
    filteredStockList: [],//getStocksDataFromWatchlist(id),
    addStock: () => {},
    deleteStock: () => { }
  } as unknown as WatchlistContextInterface
   
  export const WatchlistContext = createContext(WatchlistContextDefaultValue);

  interface WatchlistProviderProps  {
    children: React.ReactNode
  }

  export const WatchlistContextProvider = ({children}: WatchlistProviderProps) => {
    const [watchlists, setWatchlist] = useState(getDataFromLocalStorage())
 
    function addWatchlistName(watchlistName: string) {
      const lastElement = watchlists.slice(-1);
      const lastElementKey = lastElement?.[0]?.id.substring(12);
      const newWatchlistId = "wl-20230727-" + (parseInt(lastElementKey) + 1).toString();
      //console.log("New ID: ",newWatchlistId);
      const watchlistId = newWatchlistId;
      //console.log("Count: ",watchlistId,watchlists.length);
      const watchlist: Watchlist = {
          id: watchlistId,
          wlName: watchlistName,
          wlData: []
        }
        setWatchlist([...watchlists, watchlist]);
        console.log(watchlists);
    }

    function deleteWatchlist(id:string){
       console.log("Delete function is executing....",id);
       const filteredWatchlists: Watchlist[] = watchlists.filter((element)=>{
          return (id!= element.id)
       })
       console.log("Delete function is executing....",id,filteredWatchlists);
       setWatchlist(filteredWatchlists);
    }
    useEffect(()=>{
        localStorage.setItem("watchlists",JSON.stringify(watchlists));
      },[watchlists]);
      

      const [watchlistId, setId] = useState("");
      const [selectedStock, setSelectedStock] = useState("");
      const [filteredStockList, setFilteredStockList] = useState<Stock[]>(
        getStocksDataFromWatchlist(watchlistId)
      );
      console.log("Watchlist id in Global context: ",watchlistId, filteredStockList);
      const deleteStock = (stockId: string) => {
        console.log("Delete function is executing....", stockId);
        deleteStockFromWatchlist(watchlistId, stockId);
        const filteredStocks: Stock[] = filteredStockList.filter((element) => {
          return stockId != element.stockID;
        });
        setFilteredStockList(filteredStocks);
      };
    
      function fetchCompnayData(input: string){
        console.log("---Input while fetching data: ",input);
        const data = getCompanyOverviewDataBySymbol(input);
        console.log("--------------Data: ", data);
        data
          .then((res) => {
            insertStockToWatchlist(
              watchlistId,
              input,
              [res] 
            );
            setFilteredStockList(
              getStocksDataFromWatchlist(watchlistId)
            );
            setSelectedStock("");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
      const addStock = (stockId: string) =>{
        setSelectedStock(stockId);
        fetchCompnayData(stockId);
      }

    return (
      <WatchlistContext.Provider value={{ watchlists, addWatchlistName, deleteWatchlist, 
      selectedStock, filteredStockList, setId, addStock, deleteStock 
      }}>
        {children}
      </WatchlistContext.Provider>
    );
  }