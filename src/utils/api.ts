

export function getStocks() {
    // Actually go get the data from the API

    // localStorage.get('stocks')[0].stocks

    // fetch('myapi.com')
}

export interface stock {
    stockID: string,
    stockName: string,
    cmp: number,
    market_Cap: number,
    quarterly_Profit: number,
    quarterly_Sales: number,
    epsAnn: number,
    roe: number,
    roce: number,
    pe: number,
    industryPE: number
}

export interface watchlist {
    id: string,
    wlName: string,
    wlData: stock[]
}


export const getDataFromLocalStorage=() =>{ 
    const watchlistData: watchlist[] = (JSON.parse(localStorage.getItem("watchlists")));
    if(watchlistData){
       return(watchlistData);
    }else{
        return [{
            id: "wl-20230727-0",
            wlName: "Core watchlist",
            wlData: [{
                stockID: "stock-0",
                stockName: "AA",
                cmp: "321",
                market_Cap: "4.6",
                quarterly_Profit:"10",
                quarterly_Sales: "12",
                epsAnn: "21",
                roe: "10",
                roce: "19.1",
                pe: "5",
                industryPE: "7"
            },
            {
                stockID: "stock-1",
                stockName: "ABC",
                cmp: "321",
                marketCap: "4.6",
                quarterlyProfit:"10",
                quarterlySales: "12",
                epsAnn: "21",
                roe: "10",
                roce: "19.1",
                pe: "5",
                industryPE: "7"
                }
        ]}]
    }
}
export const getWatchlistDataById = ((id:string) => {
    const watchList: watchlist[] = (JSON.parse(localStorage.getItem("watchlists")));
    return watchList.filter((watchlist) => watchlist.id === id);
  })

export const getStockNameInfo = ((id:string) => {
    const watchlistData = getWatchlistDataById(id);
    console.log(watchlistData[0]);
    // if(JSON.stringify(watchlistData[0].wlData) === '[]'){
    //     console.log("stock data is not present");
    //     return [];
    // } 
    // else{
    const wlLength = (watchlistData[0].wlData).length;
    if(wlLength > 0){
    const headerInfo =Object.keys(watchlistData[0].wlData[0])
    console.log("Length of header: ",(watchlistData[0].wlData).length);
    return(headerInfo);
    }else{
        return []
        console.log("Length is zero");
    }
// }
})

export const getStocksDataFromWatchlist = ((id:string) => {
    const watchlistData = getWatchlistDataById(id);
    // const wlength: number = Object.keys(watchlistData[0].wlData).length;
    if(JSON.stringify(watchlistData[0].wlData) === '[]'){
        console.log("stock data is not present");
        return [];
    } else{
        const stocksData = Object.values(watchlistData[0].wlData);
        console.log("stocks: ",stocksData)
        return stocksData;
    }
})
  


