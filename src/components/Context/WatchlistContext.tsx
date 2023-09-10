import { createContext } from "react";
import { Watchlist } from "../../types";
import { getDataFromLocalStorage } from "../../utils/localApi";

export interface WatchlistContextData {
    watchlists: Watchlist[];
    // addWl
    // removeWl
  }
   
  export const WatchlistContextDefaultValue: WatchlistContextData = {
    watchlists: getDataFromLocalStorage()
  }
   
  export const WatchlistContext = createContext<WatchlistContextData>(WatchlistContextDefaultValue);