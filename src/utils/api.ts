import Bottleneck from "bottleneck";
import { Watchlist, Stock, CompanyOverviewData, StockDailyData, DailyData } from "../types";
"use strict";

import data from "../../data/companyOverview.json";
import dailyStockData from "../../data/companyDailySeriesData.json";
import incomeData from "../../data/companyIncomeData.json";
import balanceData from "../../data/companyBalanceSheet.json";


export const stockTicker = [
    {symbol: 'IBM',name: 'International Business Machines'},
    {symbol: 'BA',name: 'The Boeing Company',},
    {symbol: 'BABA',name: 'Alibaba Group Holding Ltd'},
    {symbol: 'BAC',name: 'Bank of America Corp'},
    {symbol: 'SAIC',name: 'Science Applications International Corp (SAIC)'}
    ]


async function getCompanyOverview(company: string) {
    const apiKey = import.meta.env.VITE_API_KEY as string
    return new Promise((resolve, reject) => {
        const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${company}&apikey=${apiKey}`

        fetch(url)
            .then(data => {
                resolve(data.json())
            })
            .catch(error => {
                reject(error)
            })
    })
}
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const limiter = new Bottleneck({
      minTime: 60 * 1000 / 5 // 5 requests per minute = 12 seconds
    })
    
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    export const wrappedFn = limiter.wrap(getCompanyOverview)
    
    // Now limited to 5 requests per minute

    export async function getCompanyOverviewDataBySymbol(value: string) {
      console.log("Get Company info data from API file.....");
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      const res = await wrappedFn(value);
      const result = res as CompanyOverviewData
      console.log("Data from aPI: ",result);
      return {
              Symbol: result.Symbol,
              AssetType: result.AssetType,
              Name: result.Name,
              Description: result.Description,
              CIK: result.CIK,
              Exchange: result.Exchange,
              Currency: result.Currency,
              Country: result.Country,
              Sector: result.Sector,
              Industry: result.Industry,
              Address: result.Address,
              FiscalYearEnd: result.FiscalYearEnd,
              LatestQuarter: (new Date(result.LatestQuarter)),
              MarketCapitalization: Number(result.MarketCapitalization),
              EBITDA: Number(result.EBITDA),
              PERatio: Number(result.PERatio) ? Number(result.PERatio) : result.PERatio,
              PEGRatio: Number(result.PEGRatio ? Number(result.PEGRatio) : result.PEGRatio),
              BookValue: Number(result.BookValue)
                ? Number(result.BookValue)
                : result.BookValue,
              DividendPerShare: Number(result.DividendPerShare)
                ? Number(result.DividendPerShare)
                : result.DividendPerShare,
              DividendYield: Number(result.DividendYield)
                ? Number(result.DividendYield)
                : result.DividendYield,
              EPS: Number(result.EPS) ? Number(result.EPS) : result.EPS,
              RevenuePerShareTTM: Number(result.RevenuePerShareTTM)
                ? Number(result.RevenuePerShareTTM)
                : result.RevenuePerShareTTM,
              ProfitMargin: Number(result.ProfitMargin)
                ? Number(result.ProfitMargin)
                : result.ProfitMargin,
              OperatingMarginTTM: Number(result.OperatingMarginTTM)
                ? Number(result.OperatingMarginTTM)
                : result.OperatingMarginTTM,
              ReturnOnAssetsTTM: Number(result.ReturnOnAssetsTTM)
                ? Number(result.ReturnOnAssetsTTM)
                : result.ReturnOnAssetsTTM,
              ReturnOnEquityTTM: Number(result.ReturnOnEquityTTM)
                ? Number(result.ReturnOnEquityTTM)
                : result.ReturnOnEquityTTM,
              RevenueTTM: Number(result.RevenueTTM)
                ? Number(result.RevenueTTM)
                : result.RevenueTTM,
              GrossProfitTTM: Number(result.GrossProfitTTM)
                ? Number(result.GrossProfitTTM)
                : result.GrossProfitTTM,
              DilutedEPSTTM: Number(result.DilutedEPSTTM)
                ? Number(result.DilutedEPSTTM)
                : result.DilutedEPSTTM,
              QuarterlyEarningsGrowthYOY: Number(result.QuarterlyEarningsGrowthYOY)
                ? Number(result.QuarterlyEarningsGrowthYOY)
                : result.QuarterlyEarningsGrowthYOY,
              QuarterlyRevenueGrowthYOY: Number(result.QuarterlyRevenueGrowthYOY)
                ? Number(result.QuarterlyRevenueGrowthYOY)
                : result.QuarterlyRevenueGrowthYOY,
              AnalystTargetPrice: Number(result.AnalystTargetPrice)
                ? Number(result.AnalystTargetPrice)
                : result.AnalystTargetPrice,
              TrailingPE: Number(result.TrailingPE)
                ? Number(result.TrailingPE)
                : result.TrailingPE,
              ForwardPE: Number(result.ForwardPE)
                ? Number(result.ForwardPE)
                : result.ForwardPE,
              PriceToSalesRatioTTM: Number(result.PriceToSalesRatioTTM)
                ? Number(result.PriceToSalesRatioTTM)
                : result.PriceToSalesRatioTTM,
              PriceToBookRatio: Number(result.PriceToBookRatio)
                ? Number(result.PriceToBookRatio)
                : result.PriceToBookRatio,
              EVToRevenue: Number(result.EVToRevenue)
                ? Number(result.EVToRevenue)
                : result.EVToRevenue,
              EVToEBITDA: Number(result.EVToEBITDA)
                ? Number(result.EVToEBITDA)
                : result.EVToEBITDA,
              Beta: Number(result.Beta) ? Number(result.Beta) : result.Beta,
              "52WeekHigh": Number(result?.["52WeekHigh"])
                ? Number(result?.["52WeekHigh"])
                : result?.["52WeekHigh"],
              "52WeekLow": Number(result?.["52WeekLow"])
                ? Number(result?.["52WeekLow"])
                : result?.["52WeekLow"],
              "50DayMovingAverage": Number(result?.["50DayMovingAverage"])
                ? Number(result?.["50DayMovingAverage"])
                : result?.["50DayMovingAverage"],
              "200DayMovingAverage": Number(result["200DayMovingAverage"])
                ? Number(result["200DayMovingAverage"])
                : result["200DayMovingAverage"],
              SharesOutstanding: Number(result.SharesOutstanding)
                ? Number(result.SharesOutstanding)
                : result.SharesOutstanding,
              DividendDate: (new Date(result.DividendDate)),
              ExDividendDate: (new Date(result.ExDividendDate)),
      }
    }


export function getStocks() {
  // Actually go get the data from the API
  // localStorage.get('stocks')[0].stocks
  // fetch('myapi.com')
}


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
  // const watchlistData = getWatchlistDataById(watchlistId);
  // console.log(watchlistData,watchlistData?.[0]?.wlData);
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
    console.log("Passed Watchlist ID: ",watchlistId,"and symbol is: ",symbol);
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
  // const wlength: number = Object.keys(watchlistData[0].wlData).length;
  if (JSON.stringify(watchlistData?.[0]?.wlData) === "[]") {
    console.log("stock data is not present");
    return [];
  } else {
    const stocksData = Object.values(watchlistData?.[0]?.wlData as Stock[]);
    console.log("stocks: ", stocksData);
    return stocksData;
  }
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


export function getCompanyOverviewDataBySymbol1(value: string) {
  console.log("Get Company info data from API file.....");
  const result = data.find(function (stock) {
    return stock?.Symbol === value;
});
console.log("****RESULT: ",result);
if (!result) {
  return
} 
    return {
      Symbol: result.Symbol,
      AssetType: result.AssetType,
      Name: result.Name,
      Description: result.Description,
      CIK: result.CIK,
      Exchange: result.Exchange,
      Currency: result.Currency,
      Country: result.Country,
      Sector: result.Sector,
      Industry: result.Industry,
      Address: result.Address,
      FiscalYearEnd: result.FiscalYearEnd,
      LatestQuarter: (new Date(result.LatestQuarter)),
      MarketCapitalization: Number(result.MarketCapitalization),
      EBITDA: Number(result.EBITDA),
      PERatio: Number(result.PERatio) ? Number(result.PERatio) : result.PERatio,
      PEGRatio: Number(result.PEGRatio ? Number(result.PEGRatio) : result.PEGRatio),
      BookValue: Number(result.BookValue)
        ? Number(result.BookValue)
        : result.BookValue,
      DividendPerShare: Number(result.DividendPerShare)
        ? Number(result.DividendPerShare)
        : result.DividendPerShare,
      DividendYield: Number(result.DividendYield)
        ? Number(result.DividendYield)
        : result.DividendYield,
      EPS: Number(result.EPS) ? Number(result.EPS) : result.EPS,
      RevenuePerShareTTM: Number(result.RevenuePerShareTTM)
        ? Number(result.RevenuePerShareTTM)
        : result.RevenuePerShareTTM,
      ProfitMargin: Number(result.ProfitMargin)
        ? Number(result.ProfitMargin)
        : result.ProfitMargin,
      OperatingMarginTTM: Number(result.OperatingMarginTTM)
        ? Number(result.OperatingMarginTTM)
        : result.OperatingMarginTTM,
      ReturnOnAssetsTTM: Number(result.ReturnOnAssetsTTM)
        ? Number(result.ReturnOnAssetsTTM)
        : result.ReturnOnAssetsTTM,
      ReturnOnEquityTTM: Number(result.ReturnOnEquityTTM)
        ? Number(result.ReturnOnEquityTTM)
        : result.ReturnOnEquityTTM,
      RevenueTTM: Number(result.RevenueTTM)
        ? Number(result.RevenueTTM)
        : result.RevenueTTM,
      GrossProfitTTM: Number(result.GrossProfitTTM)
        ? Number(result.GrossProfitTTM)
        : result.GrossProfitTTM,
      DilutedEPSTTM: Number(result.DilutedEPSTTM)
        ? Number(result.DilutedEPSTTM)
        : result.DilutedEPSTTM,
      QuarterlyEarningsGrowthYOY: Number(result.QuarterlyEarningsGrowthYOY)
        ? Number(result.QuarterlyEarningsGrowthYOY)
        : result.QuarterlyEarningsGrowthYOY,
      QuarterlyRevenueGrowthYOY: Number(result.QuarterlyRevenueGrowthYOY)
        ? Number(result.QuarterlyRevenueGrowthYOY)
        : result.QuarterlyRevenueGrowthYOY,
      AnalystTargetPrice: Number(result.AnalystTargetPrice)
        ? Number(result.AnalystTargetPrice)
        : result.AnalystTargetPrice,
      TrailingPE: Number(result.TrailingPE)
        ? Number(result.TrailingPE)
        : result.TrailingPE,
      ForwardPE: Number(result.ForwardPE)
        ? Number(result.ForwardPE)
        : result.ForwardPE,
      PriceToSalesRatioTTM: Number(result.PriceToSalesRatioTTM)
        ? Number(result.PriceToSalesRatioTTM)
        : result.PriceToSalesRatioTTM,
      PriceToBookRatio: Number(result.PriceToBookRatio)
        ? Number(result.PriceToBookRatio)
        : result.PriceToBookRatio,
      EVToRevenue: Number(result.EVToRevenue)
        ? Number(result.EVToRevenue)
        : result.EVToRevenue,
      EVToEBITDA: Number(result.EVToEBITDA)
        ? Number(result.EVToEBITDA)
        : result.EVToEBITDA,
      Beta: Number(result.Beta) ? Number(result.Beta) : result.Beta,
      "52WeekHigh": Number(result?.["52WeekHigh"])
        ? Number(result?.["52WeekHigh"])
        : result?.["52WeekHigh"],
      "52WeekLow": Number(result?.["52WeekLow"])
        ? Number(result?.["52WeekLow"])
        : result?.["52WeekLow"],
      "50DayMovingAverage": Number(result?.["50DayMovingAverage"])
        ? Number(result?.["50DayMovingAverage"])
        : result?.["50DayMovingAverage"],
      "200DayMovingAverage": Number(result["200DayMovingAverage"])
        ? Number(result["200DayMovingAverage"])
        : result["200DayMovingAverage"],
      SharesOutstanding: Number(result.SharesOutstanding)
        ? Number(result.SharesOutstanding)
        : result.SharesOutstanding,
      DividendDate: (new Date(result.DividendDate)),
      ExDividendDate: (new Date(result.ExDividendDate)),
    };
 
  //  });
  //  console.log("Company Info-----: ",output)
  // return {...[output]} as unknown as CompanyOverviewData;
}



export function getCompanyIncomeDataBySymbol(value: string) {
  console.log("Get Company INCOME data from API file.....");
  
  // const result = incomeData.filter((stock) => {
  //   return stock?.symbol === value;
  // });

  const result = incomeData.find(function (stock) {
    return stock?.symbol === value;
});
if(!result){
  return
}


    return {
      symbol: result.symbol,
      annualReports: result.annualReports.map((element) => {
        return {
          fiscalDateEnding: (new Date(element.fiscalDateEnding)),
          reportedCurrency: element.reportedCurrency,
          grossProfit: Number(element.grossProfit)
            ? Number(element.grossProfit)
            : element.grossProfit,
          totalRevenue: Number(element.totalRevenue)
            ? Number(element.totalRevenue)
            : element.totalRevenue,
          costOfRevenue: Number(element.costOfRevenue)
            ? Number(element.costOfRevenue)
            : element.costOfRevenue,
          costofGoodsAndServicesSold: Number(element.costofGoodsAndServicesSold)
            ? Number(element.costofGoodsAndServicesSold)
            : element.costofGoodsAndServicesSold,
          operatingIncome: Number(element.costOfRevenue)
            ? Number(element.costOfRevenue)
            : element.costOfRevenue,
          sellingGeneralAndAdministrative: Number(
            element.sellingGeneralAndAdministrative
          )
            ? Number(element.sellingGeneralAndAdministrative)
            : element.sellingGeneralAndAdministrative,
          researchAndDevelopment: Number(element.researchAndDevelopment)
            ? Number(element.researchAndDevelopment)
            : element.researchAndDevelopment,
          operatingExpenses: Number(element.operatingExpenses)
            ? Number(element.operatingExpenses)
            : element.operatingExpenses,
          investmentIncomeNet: Number(element.investmentIncomeNet)
            ? Number(element.investmentIncomeNet)
            : element.investmentIncomeNet,
          netInterestIncome: Number(element.netInterestIncome)
            ? Number(element.netInterestIncome)
            : element.netInterestIncome,
          interestIncome: Number(element.interestIncome)
            ? Number(element.interestIncome)
            : element.interestIncome,
          interestExpense: Number(element.interestExpense)
            ? Number(element.interestExpense)
            : element.interestExpense,
          nonInterestIncome: Number(element.nonInterestIncome)
            ? Number(element.nonInterestIncome)
            : element.nonInterestIncome,
          otherNonOperatingIncome: Number(element.otherNonOperatingIncome)
            ? Number(element.otherNonOperatingIncome)
            : element.otherNonOperatingIncome,
          depreciation: Number(element.depreciation)
            ? Number(element.depreciation)
            : element.depreciation,
          depreciationAndAmortization: Number(
            element.depreciationAndAmortization
          )
            ? Number(element.depreciationAndAmortization)
            : element.depreciationAndAmortization,
          incomeBeforeTax: Number(element.incomeBeforeTax)
            ? Number(element.incomeBeforeTax)
            : element.incomeBeforeTax,
          incomeTaxExpense: Number(element.incomeTaxExpense)
            ? Number(element.incomeTaxExpense)
            : element.incomeTaxExpense,
          interestAndDebtExpense: Number(element.interestAndDebtExpense)
            ? Number(element.interestAndDebtExpense)
            : element.interestAndDebtExpense,
          netIncomeFromContinuingOperations: Number(
            element.netIncomeFromContinuingOperations
          )
            ? Number(element.netIncomeFromContinuingOperations)
            : element.netIncomeFromContinuingOperations,
          comprehensiveIncomeNetOfTax: Number(
            element.comprehensiveIncomeNetOfTax
          )
            ? Number(element.comprehensiveIncomeNetOfTax)
            : element.comprehensiveIncomeNetOfTax,
          ebit: Number(element.ebit) ? Number(element.ebit) : element.ebit,
          ebitda: Number(element.ebitda)
            ? Number(element.ebitda)
            : element.ebitda,
          netIncome: Number(element.netIncome)
            ? Number(element.netIncome)
            : element.netIncome,
        };
      }),
      quarterlyReports: result.quarterlyReports.map((element) => {
        return {
          fiscalDateEnding: (new Date(element.fiscalDateEnding)),
          reportedCurrency: element.reportedCurrency,
          grossProfit: Number(element.grossProfit)
            ? Number(element.grossProfit)
            : element.grossProfit,
          totalRevenue: Number(element.totalRevenue)
            ? Number(element.totalRevenue)
            : element.totalRevenue,
          costOfRevenue: Number(element.costOfRevenue)
            ? Number(element.costOfRevenue)
            : element.costOfRevenue,
          costofGoodsAndServicesSold: Number(element.costofGoodsAndServicesSold)
            ? Number(element.costofGoodsAndServicesSold)
            : element.costofGoodsAndServicesSold,
          operatingIncome: Number(element.costOfRevenue)
            ? Number(element.costOfRevenue)
            : element.costOfRevenue,
          sellingGeneralAndAdministrative: Number(
            element.sellingGeneralAndAdministrative
          )
            ? Number(element.sellingGeneralAndAdministrative)
            : element.sellingGeneralAndAdministrative,
          researchAndDevelopment: Number(element.researchAndDevelopment)
            ? Number(element.researchAndDevelopment)
            : element.researchAndDevelopment,
          operatingExpenses: Number(element.operatingExpenses)
            ? Number(element.operatingExpenses)
            : element.operatingExpenses,
          investmentIncomeNet: Number(element.investmentIncomeNet)
            ? Number(element.investmentIncomeNet)
            : element.investmentIncomeNet,
          netInterestIncome: Number(element.netInterestIncome)
            ? Number(element.netInterestIncome)
            : element.netInterestIncome,
          interestIncome: Number(element.interestIncome)
            ? Number(element.interestIncome)
            : element.interestIncome,
          interestExpense: Number(element.interestExpense)
            ? Number(element.interestExpense)
            : element.interestExpense,
          nonInterestIncome: Number(element.nonInterestIncome)
            ? Number(element.nonInterestIncome)
            : element.nonInterestIncome,
          otherNonOperatingIncome: Number(element.otherNonOperatingIncome)
            ? Number(element.otherNonOperatingIncome)
            : element.otherNonOperatingIncome,
          depreciation: Number(element.depreciation)
            ? Number(element.depreciation)
            : element.depreciation,
          depreciationAndAmortization: Number(
            element.depreciationAndAmortization
          )
            ? Number(element.depreciationAndAmortization)
            : element.depreciationAndAmortization,
          incomeBeforeTax: Number(element.incomeBeforeTax)
            ? Number(element.incomeBeforeTax)
            : element.incomeBeforeTax,
          incomeTaxExpense: Number(element.incomeTaxExpense)
            ? Number(element.incomeTaxExpense)
            : element.incomeTaxExpense,
          interestAndDebtExpense: Number(element.interestAndDebtExpense)
            ? Number(element.interestAndDebtExpense)
            : element.interestAndDebtExpense,
          netIncomeFromContinuingOperations: Number(
            element.netIncomeFromContinuingOperations
          )
            ? Number(element.netIncomeFromContinuingOperations)
            : element.netIncomeFromContinuingOperations,
          comprehensiveIncomeNetOfTax: Number(
            element.comprehensiveIncomeNetOfTax
          )
            ? Number(element.comprehensiveIncomeNetOfTax)
            : element.comprehensiveIncomeNetOfTax,
          ebit: Number(element.ebit) ? Number(element.ebit) : element.ebit,
          ebitda: Number(element.ebitda)
            ? Number(element.ebitda)
            : element.ebitda,
          netIncome: Number(element.netIncome)
            ? Number(element.netIncome)
            : element.netIncome,
        };
      }),
    };

}

export function getCompanyBalanceSheetDataBySymbol(value: string) {
  console.log("Get Company INCOME data from API file.....");
  // const result = balanceData.filter((stock) => {
  //   return stock?.symbol === value;
  // });

  const result = balanceData.find(function (stock) {
    return stock?.symbol === value;
});
if(!result){
  return
}

    return {
      symbol: result.symbol,
      annualReports: result.annualReports.map((element) => {
        return {
          fiscalDateEnding: (new Date(element.fiscalDateEnding)),
          reportedCurrency: element.reportedCurrency,
          totalAssets: Number(element.totalAssets)
            ? Number(element.totalAssets)
            : element.totalAssets,
          totalCurrentAssets: Number(element.totalCurrentAssets)
            ? Number(element.totalCurrentAssets)
            : element.totalCurrentAssets,
          cashAndCashEquivalentsAtCarryingValue: Number(
            element.cashAndCashEquivalentsAtCarryingValue
          )
            ? Number(element.cashAndCashEquivalentsAtCarryingValue)
            : element.cashAndCashEquivalentsAtCarryingValue,
          cashAndShortTermInvestments: Number(
            element.cashAndShortTermInvestments
          )
            ? Number(element.cashAndShortTermInvestments)
            : element.cashAndShortTermInvestments,
          inventory: Number(element.inventory)
            ? Number(element.inventory)
            : element.inventory,
          currentNetReceivables: Number(element.currentNetReceivables)
            ? Number(element.currentNetReceivables)
            : element.currentNetReceivables,
          totalNonCurrentAssets: Number(element.totalNonCurrentAssets)
            ? Number(element.totalNonCurrentAssets)
            : element.totalNonCurrentAssets,
          propertyPlantEquipment: Number(element.propertyPlantEquipment)
            ? Number(element.propertyPlantEquipment)
            : element.propertyPlantEquipment,
          accumulatedDepreciationAmortizationPPE: Number(
            element.accumulatedDepreciationAmortizationPPE
          )
            ? Number(element.accumulatedDepreciationAmortizationPPE)
            : element.accumulatedDepreciationAmortizationPPE,
          intangibleAssets: Number(element.intangibleAssets)
            ? Number(element.intangibleAssets)
            : element.intangibleAssets,
          intangibleAssetsExcludingGoodwill: Number(
            element.intangibleAssetsExcludingGoodwill
          )
            ? Number(element.intangibleAssetsExcludingGoodwill)
            : element.intangibleAssetsExcludingGoodwill,
          goodwill: Number(element.goodwill)
            ? Number(element.goodwill)
            : element.goodwill,
          investments: Number(element.investments)
            ? Number(element.investments)
            : element.investments,
          longTermInvestments: Number(element.longTermInvestments)
            ? Number(element.longTermInvestments)
            : element.longTermInvestments,
          shortTermInvestments: Number(element.shortTermInvestments)
            ? Number(element.shortTermInvestments)
            : element.shortTermInvestments,
          otherCurrentAssets: Number(element.otherCurrentAssets)
            ? Number(element.otherCurrentAssets)
            : element.otherCurrentAssets,
          otherNonCurrentAssets: Number(element.otherNonCurrentAssets)
            ? Number(element.otherNonCurrentAssets)
            : element.otherNonCurrentAssets,
          totalLiabilities: Number(element.totalLiabilities)
            ? Number(element.totalLiabilities)
            : element.totalLiabilities,
          totalCurrentLiabilities: Number(element.totalCurrentLiabilities)
            ? Number(element.totalCurrentLiabilities)
            : element.totalCurrentLiabilities,
          currentAccountsPayable: Number(element.currentAccountsPayable)
            ? Number(element.currentAccountsPayable)
            : element.currentAccountsPayable,
          deferredRevenue: Number(element.deferredRevenue)
            ? Number(element.deferredRevenue)
            : element.deferredRevenue,
          currentDebt: Number(element.currentDebt)
            ? Number(element.currentDebt)
            : element.currentDebt,
          shortTermDebt: Number(element.shortTermDebt)
            ? Number(element.shortTermDebt)
            : element.shortTermDebt,
          totalNonCurrentLiabilities: Number(element.totalNonCurrentLiabilities)
            ? Number(element.totalNonCurrentLiabilities)
            : element.totalNonCurrentLiabilities,
          capitalLeaseObligations: Number(element.capitalLeaseObligations)
            ? Number(element.capitalLeaseObligations)
            : element.capitalLeaseObligations,
          longTermDebt: Number(element.longTermDebt)
            ? Number(element.longTermDebt)
            : element.longTermDebt,
          currentLongTermDebt: Number(element.currentLongTermDebt)
            ? Number(element.currentLongTermDebt)
            : element.currentLongTermDebt,
          longTermDebtNoncurrent: Number(element.longTermDebtNoncurrent)
            ? Number(element.longTermDebtNoncurrent)
            : element.longTermDebtNoncurrent,
          shortLongTermDebtTotal: Number(element.shortLongTermDebtTotal)
            ? Number(element.shortLongTermDebtTotal)
            : element.shortLongTermDebtTotal,
          otherCurrentLiabilities: Number(element.otherCurrentLiabilities)
            ? Number(element.otherCurrentLiabilities)
            : element.otherCurrentLiabilities,
          otherNonCurrentLiabilities: Number(element.otherNonCurrentLiabilities)
            ? Number(element.otherNonCurrentLiabilities)
            : element.otherNonCurrentLiabilities,
          totalShareholderEquity: Number(element.totalShareholderEquity)
            ? Number(element.totalShareholderEquity)
            : element.totalShareholderEquity,
          treasuryStock: Number(element.treasuryStock)
            ? Number(element.treasuryStock)
            : element.treasuryStock,
          retainedEarnings: Number(element.retainedEarnings)
            ? Number(element.retainedEarnings)
            : element.retainedEarnings,
          commonStock: Number(element.commonStock)
            ? Number(element.commonStock)
            : element.commonStock,
          commonStockSharesOutstanding: Number(
            element.commonStockSharesOutstanding
          )
            ? Number(element.commonStockSharesOutstanding)
            : element.commonStockSharesOutstanding,
        };
      }),
      quarterlyReports: result.annualReports.map((element) => {
        return {
          fiscalDateEnding: (new Date(element.fiscalDateEnding)),
          reportedCurrency: element.reportedCurrency,
          totalAssets: Number(element.totalAssets)
            ? Number(element.totalAssets)
            : element.totalAssets,
          totalCurrentAssets: Number(element.totalCurrentAssets)
            ? Number(element.totalCurrentAssets)
            : element.totalCurrentAssets,
          cashAndCashEquivalentsAtCarryingValue: Number(
            element.cashAndCashEquivalentsAtCarryingValue
          )
            ? Number(element.cashAndCashEquivalentsAtCarryingValue)
            : element.cashAndCashEquivalentsAtCarryingValue,
          cashAndShortTermInvestments: Number(
            element.cashAndShortTermInvestments
          )
            ? Number(element.cashAndShortTermInvestments)
            : element.cashAndShortTermInvestments,
          inventory: Number(element.inventory)
            ? Number(element.inventory)
            : element.inventory,
          currentNetReceivables: Number(element.currentNetReceivables)
            ? Number(element.currentNetReceivables)
            : element.currentNetReceivables,
          totalNonCurrentAssets: Number(element.totalNonCurrentAssets)
            ? Number(element.totalNonCurrentAssets)
            : element.totalNonCurrentAssets,
          propertyPlantEquipment: Number(element.propertyPlantEquipment)
            ? Number(element.propertyPlantEquipment)
            : element.propertyPlantEquipment,
          accumulatedDepreciationAmortizationPPE: Number(
            element.accumulatedDepreciationAmortizationPPE
          )
            ? Number(element.accumulatedDepreciationAmortizationPPE)
            : element.accumulatedDepreciationAmortizationPPE,
          intangibleAssets: Number(element.intangibleAssets)
            ? Number(element.intangibleAssets)
            : element.intangibleAssets,
          intangibleAssetsExcludingGoodwill: Number(
            element.intangibleAssetsExcludingGoodwill
          )
            ? Number(element.intangibleAssetsExcludingGoodwill)
            : element.intangibleAssetsExcludingGoodwill,
          goodwill: Number(element.goodwill)
            ? Number(element.goodwill)
            : element.goodwill,
          investments: Number(element.investments)
            ? Number(element.investments)
            : element.investments,
          longTermInvestments: Number(element.longTermInvestments)
            ? Number(element.longTermInvestments)
            : element.longTermInvestments,
          shortTermInvestments: Number(element.shortTermInvestments)
            ? Number(element.shortTermInvestments)
            : element.shortTermInvestments,
          otherCurrentAssets: Number(element.otherCurrentAssets)
            ? Number(element.otherCurrentAssets)
            : element.otherCurrentAssets,
          otherNonCurrentAssets: Number(element.otherNonCurrentAssets)
            ? Number(element.otherNonCurrentAssets)
            : element.otherNonCurrentAssets,
          totalLiabilities: Number(element.totalLiabilities)
            ? Number(element.totalLiabilities)
            : element.totalLiabilities,
          totalCurrentLiabilities: Number(element.totalCurrentLiabilities)
            ? Number(element.totalCurrentLiabilities)
            : element.totalCurrentLiabilities,
          currentAccountsPayable: Number(element.currentAccountsPayable)
            ? Number(element.currentAccountsPayable)
            : element.currentAccountsPayable,
          deferredRevenue: Number(element.deferredRevenue)
            ? Number(element.deferredRevenue)
            : element.deferredRevenue,
          currentDebt: Number(element.currentDebt)
            ? Number(element.currentDebt)
            : element.currentDebt,
          shortTermDebt: Number(element.shortTermDebt)
            ? Number(element.shortTermDebt)
            : element.shortTermDebt,
          totalNonCurrentLiabilities: Number(element.totalNonCurrentLiabilities)
            ? Number(element.totalNonCurrentLiabilities)
            : element.totalNonCurrentLiabilities,
          capitalLeaseObligations: Number(element.capitalLeaseObligations)
            ? Number(element.capitalLeaseObligations)
            : element.capitalLeaseObligations,
          longTermDebt: Number(element.longTermDebt)
            ? Number(element.longTermDebt)
            : element.longTermDebt,
          currentLongTermDebt: Number(element.currentLongTermDebt)
            ? Number(element.currentLongTermDebt)
            : element.currentLongTermDebt,
          longTermDebtNoncurrent: Number(element.longTermDebtNoncurrent)
            ? Number(element.longTermDebtNoncurrent)
            : element.longTermDebtNoncurrent,
          shortLongTermDebtTotal: Number(element.shortLongTermDebtTotal)
            ? Number(element.shortLongTermDebtTotal)
            : element.shortLongTermDebtTotal,
          otherCurrentLiabilities: Number(element.otherCurrentLiabilities)
            ? Number(element.otherCurrentLiabilities)
            : element.otherCurrentLiabilities,
          otherNonCurrentLiabilities: Number(element.otherNonCurrentLiabilities)
            ? Number(element.otherNonCurrentLiabilities)
            : element.otherNonCurrentLiabilities,
          totalShareholderEquity: Number(element.totalShareholderEquity)
            ? Number(element.totalShareholderEquity)
            : element.totalShareholderEquity,
          treasuryStock: Number(element.treasuryStock)
            ? Number(element.treasuryStock)
            : element.treasuryStock,
          retainedEarnings: Number(element.retainedEarnings)
            ? Number(element.retainedEarnings)
            : element.retainedEarnings,
          commonStock: Number(element.commonStock)
            ? Number(element.commonStock)
            : element.commonStock,
          commonStockSharesOutstanding: Number(
            element.commonStockSharesOutstanding
          )
            ? Number(element.commonStockSharesOutstanding)
            : element.commonStockSharesOutstanding,
        };
      }),
    };
}

function getTimeSeries(item: StockDailyData){

  // Ok im gonna do a quick review of the code then

    const result: {[key: string]: DailyData } = {}
    Object.keys(item["Time Series (Daily)"]).forEach(function (key) {

      // @ts-ignore
        const value = item?.["Time Series (Daily)"]?.[key] as DailyData;
        // console.log("Key:", key, "Value: ",value);
        result[key] = {
            "1. open": (Number(value["1. open"]) ? Number(value["1. open"]) : value["1. open"]),
            "2. high": (Number(value["2. high"]) ? Number(value["2. high"]) : value["2. high"]),
            "3. low": (Number(value["3. low"]) ? Number(value["3. low"]) : value["3. low"]),
            "4. close": (Number(value["4. close"]) ? Number(value["4. close"]) : value["4. close"]),
            "5. volume": (Number(value["5. volume"]) ? Number(value["5. volume"]) : value["5. volume"])
        };
    })
      return result 
}

export function getDailyStockDataBySymbol(value: string) {
    console.log("Get Company info data from API file.....");
    const result = dailyStockData.filter((stock) => {
      return stock?.["Meta Data"]?.["2. Symbol"] === value;
    });
   
    const output = result.map((item) => {
    console.log("ITEM: ", item);
    const resultObject = getTimeSeries(item as unknown as StockDailyData);
    return {
        "Meta Data":  {
            "1. Information": item["Meta Data"]["1. Information"],
            "2. Symbol": item["Meta Data"]["2. Symbol"],
            "3. Last Refreshed": (new Date(item["Meta Data"]["2. Symbol"])),
            "4. Output Size": item["Meta Data"]["2. Symbol"],
            "5. Time Zone": item["Meta Data"]["2. Symbol"],
          },
        "Time Series (Daily)": resultObject
    }
    });
    console.log("-------------OUTPUT Daily data in API : ",output);
    return output as unknown as StockDailyData[]
  }
