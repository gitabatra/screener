// import { createContext } from "react";
// import { Watchlist } from "../../types";
// import { getDataFromLocalStorage } from "../../utils/localApi";

// const [watchlists, setWatchlist] = useState<Watchlist[]>(getDataFromLocalStorage())

// export interface WatchlistContextData {
//     watchlists: Watchlist[];
//     // addWatchlistName: (name: string) => void;
//     // deleteWatchlist: (id: string) =>void;
//   }
   
//   export const WatchlistContextDefaultValue: WatchlistContextData = {
   
//     watchlists: getDataFromLocalStorage(),


//   }
   
//   export const WatchlistContext = createContext<WatchlistContextData>(WatchlistContextDefaultValue);

import { createContext, useEffect, useState } from "react";
import { 
  // CompanyOverviewData, Stock, 
  Watchlist } from "../../types";
import { 
  // deleteStockFromWatchlist, 
  getDataFromLocalStorage, 
  // getStocksDataFromWatchlist, insertStockToWatchlist 
} from "../../utils/localApi";
// import { getCompanyOverviewDataBySymbol } from "../../utils/api";
// import { useParams } from "react-router-dom";

export interface WatchlistContextInterface {
    watchlists: Watchlist[];
    addWatchlistName: (name: string) => void;
    deleteWatchlist: (id: string) =>void;
    // selectedStock: string;
    // filteredStockList: Stock[];
    // result: CompanyOverviewData | undefined;
    // id: string | undefined;
    // addStock:  (stockId: string) => void;
    // deleteStock: (stockId: string) => void;
  }
   
  export const WatchlistContextDefaultValue: WatchlistContextInterface = {
    watchlists: getDataFromLocalStorage(),
    addWatchlistName: () => { },
    deleteWatchlist: () => { },
    // selectedStock: "",
    // filteredStockList: [],
    // result: null,
    // id: "",
    // addStock: () => {},
    // deleteStock: () => { }
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
      

//       const { id } = useParams<{ id: string }>();
//       const [selectedStock, setSelectedStock] = useState("");
//       const [filteredStockList, setFilteredStockList] = useState<Stock[]>(
//         // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
//         getStocksDataFromWatchlist(id as string)
//       );
//       const [result, setResult] = useState<CompanyOverviewData | undefined>();

//       const deleteStock = (stockId: string) => {
//         console.log("Delete function is executing....", stockId);
//         deleteStockFromWatchlist(id as string, stockId);
//         const filteredStocks: Stock[] = filteredStockList.filter((element) => {
//           return stockId != element.stockID;
//         });
//         setFilteredStockList(filteredStocks);
//       };


//   function fetchCompnayData(input: string){
//     console.log("---Input while fetching data: ",input);
//     const data = getCompanyOverviewDataBySymbol(input);
//     data
//       .then((result) => {
//         console.log("Data: ", result);
//         setSelectedStock(input);
//         setResult(result);
//        // return result
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// console.log("and Input is: ",selectedStock)
//   const addStock = (stockId: string) =>{
//     fetchCompnayData(stockId);
//   }

    return (
      <WatchlistContext.Provider value={{ watchlists, addWatchlistName, deleteWatchlist, 
      // selectedStock, filteredStockList, result, id, addStock, deleteStock 
      }}>
        {children}
      </WatchlistContext.Provider>
    );
  }