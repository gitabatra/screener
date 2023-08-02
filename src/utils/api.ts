

export function getStocks() {
    // Actually go get the data from the API

    // localStorage.get('stocks')[0].stocks

    // fetch('myapi.com')
}


export const getDataFromLocalStorage=() =>{ 
    const watchlistData = JSON.parse(localStorage.getItem("watchlists")|| JSON.stringify(""));
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
    const watchList = JSON.parse(localStorage.getItem("watchlists")) || [];
    return watchList.filter((watchlist) => watchlist.id === id);
  })

export const getStocksDataFromWatchlist = ((id:string) => {
    const watchlistData = getWatchlistDataById(id);
    const wlength = Object.keys(watchlistData[0].wlData).length;
    const stocksData = Object.values(watchlistData[0].wlData);
    return stocksData;
})
  


