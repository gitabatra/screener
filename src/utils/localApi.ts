import { CompanyOverviewData, Stock, Watchlist } from "../types";
import { Portfolio } from "../types/Portfolio";

export const getDataFromLocalStorage = (): Watchlist[] => {
  const defaultData = [
    {
      id: "wl-20230727-0",
      wlName: "Core watchlist",
      wlData: [
      ],
    },
  ];
  const watchlistData = JSON.parse(
    localStorage.getItem("watchlists") ?? "null"
  ) as Watchlist[] | null;

    return watchlistData ? watchlistData : defaultData
};

export const getPortfolioFromLocalStorage = (): Portfolio[] => {
    const defaultData: Portfolio[] = [];
    const portfolioData = JSON.parse(
        localStorage.getItem("portfolio") ?? "null"
      ) as Portfolio[] | null;
    
    return portfolioData ? portfolioData : defaultData;
};


export const getWatchlistsNames = (watchlist: Watchlist[]) =>{
    const watchlistNames = watchlist.map(wl => wl.wlName);
    console.log("Watchlist names: ",watchlistNames);
    return watchlistNames
}


export function isStockAlreadyAdded(stockData: Stock[],symbol: string) {
    const isAdded = stockData.find(stock => stock.stockID === symbol)
    return isAdded ? isAdded : false
}


export function deleteStockFromWatchlist(watchlistId: string, stockId: string) {
  const watchlists = getDataFromLocalStorage();
  const index = watchlists.findIndex(x => x.id === watchlistId);
  const stockIndex = watchlists[index].wlData.findIndex(x => x.stockID === stockId)
  console.log("**********Indx of selected watchlist: ",index, stockIndex);
  const watchlistDataObj = watchlists[index].wlData;
  watchlistDataObj.splice(stockIndex, 1);
  console.log("after Assigning to  watchlist Data: ",watchlistDataObj,watchlists[index])
  localStorage.setItem("watchlists", JSON.stringify(watchlists));
}

export function insertStockToWatchlist(watchlistId: string, symbol: string, result: CompanyOverviewData[]) {
    const watchlists = getDataFromLocalStorage();
    console.log("Passed Watchlist ID: ",watchlistId,"and ****** result is: ",result);
    const watchlistData = getWatchlistDataById(watchlistId);
    console.log(watchlistData,watchlistData?.[0]?.wlData);

    const index = watchlists.findIndex(x => x.id === watchlistId);
    console.log("**********Indx of selected watchlist: ",index);

    const newWLDataObject: Stock = {
        stockID: result?.[0]?.Symbol,
        stockName: result?.[0]?.Name,
        cmp: 0,
        marketCap: (result?.[0]?.MarketCapitalization),
        bookValue: result?.[0]?.BookValue,
        priceToBookRatio: result?.[0]?.PriceToBookRatio,
        dividendYield: result?.[0]?.DividendYield,
        priceToSalesRatioTTM: result?.[0]?.PriceToSalesRatioTTM,
        eps: result?.[0]?.EPS,
        roe: result?.[0]?.ReturnOnEquityTTM,
        ProfitMargin: result?.[0]?.ProfitMargin,
        pe: result?.[0]?.PERatio,
        weekHigh_52: result?.[0]?.["52WeekHigh"],
        weekLow_52: result?.[0]?.["52WeekLow"],
      };
      const stockData: Stock[] | undefined = watchlistData?.[0]?.wlData

      const isAdded = isStockAlreadyAdded(stockData as Stock[], symbol);
      if(!isAdded){
        console.log("not added..");
        watchlistData?.[0]?.wlData.push(newWLDataObject);
        Object.assign(watchlists[index].wlData,watchlistData?.[0]?.wlData)
        localStorage.setItem("watchlists", JSON.stringify(watchlists));
      }
 }

export const getWatchlistDataById = (id: string): Watchlist[] | null => {
  const watchList = JSON.parse(localStorage.getItem("watchlists") ?? "null") as
    | Watchlist[]
    | null;
  return watchList?.filter((watchlist) => watchlist.id === id) ?? null;
};

export const getStockNameInfo = (id: string) => {
  const watchlistData: Watchlist[] | null = getWatchlistDataById(id);
  console.log(watchlistData?.[0]);
  const wlLength = watchlistData?.[0]?.wlData?.length;
  if ((wlLength as number) > 0) {
    const headerInfo = Object.keys(watchlistData?.[0]?.wlData?.[0] as Stock);
    // console.log("Length of header: ",(watchlistData[0].wlData).length);
    return headerInfo;
  } else {
    return [];
    console.log("Length is zero");
  }
  // }
};

export const getStocksDataFromWatchlist = (id: string) => {
  const watchlistData = getWatchlistDataById(id);
  const stockData = watchlistData?.[0]?.wlData;
  return stockData ? Object.values(stockData) : [];

  // const wlength: number = Object.keys(watchlistData[0].wlData).length;
  // if (JSON.stringify(watchlistData?.[0]?.wlData) === "[]") {
  //   console.log("stock data is not present");
  //   return [];
  // } else {
  //   const stocksData = Object.values(watchlistData?.[0]?.wlData as Stock[]);
  //   console.log("stocks: ", stocksData);
  //   return stocksData;
  // }
};

export function formatNumber(num: number, precision = 2) {
  const map = [
    { suffix: " T", threshold: 1e12 },
    { suffix: " B", threshold: 1e9 },
    { suffix: " M", threshold: 1e6 },
    { suffix: " K", threshold: 1e3 },
    { suffix: "", threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
    return formatted;
  }

  return num;
}

export const getMonthDate = (index: number) =>{
  const date = new Date();
  date.setMonth(date.getUTCMonth() - index);
  return date
}

export const getYearDate = (index: number) =>{
  const date = new Date();
  date.setFullYear(date.getUTCFullYear() - index);
  return date
}