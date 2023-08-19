import { Watchlist, Stock, CompanyOverviewData, StockDailyData, TimeSeriesDaily, DailyData } from "../types";


import data from "../../data/companyOverview.json";
import dailyStockData from "../../data/companyDailySeriesData.json";
import incomeData from "../../data/companyIncomeData.json";
import balanceData from "../../data/companyBalanceSheet.json";


export function getStocks() {
  // Actually go get the data from the API
  // localStorage.get('stocks')[0].stocks
  // fetch('myapi.com')
}

export const getCompanyOverview = () => {
  return data;
};

export const getDataFromLocalStorage = (): Watchlist[] => {
  const watchlistData = JSON.parse(
    localStorage.getItem("watchlists") ?? "null"
  ) as Watchlist[] | null;
  if (watchlistData) {
    return watchlistData;
  } else {
    return [
      {
        id: "wl-20230727-0",
        wlName: "Core watchlist",
        wlData: [
          {
            stockID: "stock-0",
            stockName: "AA",
            cmp: 321,
            marketCap: 4.6,
            quarterlyProfit: 10,
            quarterlySales: 12,
            epsAnn: 21,
            roe: 10,
            roce: 19.1,
            pe: 5,
            industryPE: 7,
          },
          {
            stockID: "stock-1",
            stockName: "ABC",
            cmp: 321,
            marketCap: 4.6,
            quarterlyProfit: 10,
            quarterlySales: 12,
            epsAnn: 21,
            roe: 10,
            roce: 19.1,
            pe: 5,
            industryPE: 7,
          },
        ],
      },
    ];
  }
};
export const getWatchlistDataById = (id: string): Watchlist[] | null => {
  const watchList = JSON.parse(localStorage.getItem("watchlists") ?? "null") as
    | Watchlist[]
    | null;
  return watchList?.filter((watchlist) => watchlist.id === id) ?? null;
};

export const getStockNameInfo = (id: string) => {
  const watchlistData: Watchlist[] | null = getWatchlistDataById(id);
  console.log(watchlistData?.[0]);
  // if(JSON.stringify(watchlistData[0].wlData) === '[]'){
  //     console.log("stock data is not present");
  //     return [];
  // }
  // else{
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

export function getCompanyOverviewData() {
  console.log("Get Company info data from API file.....");
  const output = data.map((item) => {
    return {
      Symbol: item.Symbol,
      AssetType: item.AssetType,
      Name: item.Name,
      Description: item.Description,
      CIK: item.CIK,
      Exchange: item.Exchange,
      Currency: item.Currency,
      Country: item.Country,
      Sector: item.Sector,
      Industry: item.Industry,
      Address: item.Address,
      FiscalYearEnd: item.FiscalYearEnd,
      LatestQuarter: Date(item.LatestQuarter),
      MarketCapitalization: Number(item.MarketCapitalization),
      EBITDA: Number(item.EBITDA),
      PERatio: Number(item.PERatio) ? Number(item.PERatio) : item.PERatio,
      PEGRatio: Number(item.PEGRatio ? Number(item.PEGRatio) : item.PEGRatio),
      BookValue: Number(item.BookValue)
        ? Number(item.BookValue)
        : item.BookValue,
      DividendPerShare: Number(item.DividendPerShare)
        ? Number(item.DividendPerShare)
        : item.DividendPerShare,
      DividendYield: Number(item.DividendYield)
        ? Number(item.DividendYield)
        : item.DividendYield,
      EPS: Number(item.EPS) ? Number(item.EPS) : item.EPS,
      RevenuePerShareTTM: Number(item.RevenuePerShareTTM)
        ? Number(item.RevenuePerShareTTM)
        : item.RevenuePerShareTTM,
      ProfitMargin: Number(item.ProfitMargin)
        ? Number(item.ProfitMargin)
        : item.ProfitMargin,
      OperatingMarginTTM: Number(item.OperatingMarginTTM)
        ? Number(item.OperatingMarginTTM)
        : item.OperatingMarginTTM,
      ReturnOnAssetsTTM: Number(item.ReturnOnAssetsTTM)
        ? Number(item.ReturnOnAssetsTTM)
        : item.ReturnOnAssetsTTM,
      ReturnOnEquityTTM: Number(item.ReturnOnEquityTTM)
        ? Number(item.ReturnOnEquityTTM)
        : item.ReturnOnEquityTTM,
      RevenueTTM: Number(item.RevenueTTM)
        ? Number(item.RevenueTTM)
        : item.RevenueTTM,
      GrossProfitTTM: Number(item.GrossProfitTTM)
        ? Number(item.GrossProfitTTM)
        : item.GrossProfitTTM,
      DilutedEPSTTM: Number(item.DilutedEPSTTM)
        ? Number(item.DilutedEPSTTM)
        : item.DilutedEPSTTM,
      QuarterlyEarningsGrowthYOY: Number(item.QuarterlyEarningsGrowthYOY)
        ? Number(item.QuarterlyEarningsGrowthYOY)
        : item.QuarterlyEarningsGrowthYOY,
      QuarterlyRevenueGrowthYOY: Number(item.QuarterlyRevenueGrowthYOY)
        ? Number(item.QuarterlyRevenueGrowthYOY)
        : item.QuarterlyRevenueGrowthYOY,
      AnalystTargetPrice: Number(item.AnalystTargetPrice)
        ? Number(item.AnalystTargetPrice)
        : item.AnalystTargetPrice,
      TrailingPE: Number(item.TrailingPE)
        ? Number(item.TrailingPE)
        : item.TrailingPE,
      ForwardPE: Number(item.ForwardPE)
        ? Number(item.ForwardPE)
        : item.ForwardPE,
      PriceToSalesRatioTTM: Number(item.PriceToSalesRatioTTM)
        ? Number(item.PriceToSalesRatioTTM)
        : item.PriceToSalesRatioTTM,
      PriceToBookRatio: Number(item.PriceToBookRatio)
        ? Number(item.PriceToBookRatio)
        : item.PriceToBookRatio,
      EVToRevenue: Number(item.EVToRevenue)
        ? Number(item.EVToRevenue)
        : item.EVToRevenue,
      EVToEBITDA: Number(item.EVToEBITDA)
        ? Number(item.EVToEBITDA)
        : item.EVToEBITDA,
      Beta: Number(item.Beta) ? Number(item.Beta) : item.Beta,
      "52WeekHigh": Number(item?.["52WeekHigh"])
        ? Number(item?.["52WeekHigh"])
        : item?.["52WeekHigh"],
      "52WeekLow": Number(item?.["52WeekLow"])
        ? Number(item?.["52WeekLow"])
        : item?.["52WeekLow"],
      "50DayMovingAverage": Number(item?.["50DayMovingAverage"])
        ? Number(item?.["50DayMovingAverage"])
        : item?.["50DayMovingAverage"],
      "200DayMovingAverage": Number(item["200DayMovingAverage"])
        ? Number(item["200DayMovingAverage"])
        : item["200DayMovingAverage"],
      SharesOutstanding: Number(item.SharesOutstanding)
        ? Number(item.SharesOutstanding)
        : item.SharesOutstanding,
      DividendDate: Date(item.DividendDate),
      ExDividendDate: Date(item.ExDividendDate),
    };
  });
  return output;
}

export function getCompanyOverviewDataBySymbol(value: string) {
  console.log("Get Company info data from API file.....");
  const result = data.filter((stock) => {
    return stock?.Symbol === value;
  });
  const output = result.map((item) => {
    return {
      Symbol: item.Symbol,
      AssetType: item.AssetType,
      Name: item.Name,
      Description: item.Description,
      CIK: item.CIK,
      Exchange: item.Exchange,
      Currency: item.Currency,
      Country: item.Country,
      Sector: item.Sector,
      Industry: item.Industry,
      Address: item.Address,
      FiscalYearEnd: item.FiscalYearEnd,
      LatestQuarter: Date(item.LatestQuarter),
      MarketCapitalization: Number(item.MarketCapitalization),
      EBITDA: Number(item.EBITDA),
      PERatio: Number(item.PERatio) ? Number(item.PERatio) : item.PERatio,
      PEGRatio: Number(item.PEGRatio ? Number(item.PEGRatio) : item.PEGRatio),
      BookValue: Number(item.BookValue)
        ? Number(item.BookValue)
        : item.BookValue,
      DividendPerShare: Number(item.DividendPerShare)
        ? Number(item.DividendPerShare)
        : item.DividendPerShare,
      DividendYield: Number(item.DividendYield)
        ? Number(item.DividendYield)
        : item.DividendYield,
      EPS: Number(item.EPS) ? Number(item.EPS) : item.EPS,
      RevenuePerShareTTM: Number(item.RevenuePerShareTTM)
        ? Number(item.RevenuePerShareTTM)
        : item.RevenuePerShareTTM,
      ProfitMargin: Number(item.ProfitMargin)
        ? Number(item.ProfitMargin)
        : item.ProfitMargin,
      OperatingMarginTTM: Number(item.OperatingMarginTTM)
        ? Number(item.OperatingMarginTTM)
        : item.OperatingMarginTTM,
      ReturnOnAssetsTTM: Number(item.ReturnOnAssetsTTM)
        ? Number(item.ReturnOnAssetsTTM)
        : item.ReturnOnAssetsTTM,
      ReturnOnEquityTTM: Number(item.ReturnOnEquityTTM)
        ? Number(item.ReturnOnEquityTTM)
        : item.ReturnOnEquityTTM,
      RevenueTTM: Number(item.RevenueTTM)
        ? Number(item.RevenueTTM)
        : item.RevenueTTM,
      GrossProfitTTM: Number(item.GrossProfitTTM)
        ? Number(item.GrossProfitTTM)
        : item.GrossProfitTTM,
      DilutedEPSTTM: Number(item.DilutedEPSTTM)
        ? Number(item.DilutedEPSTTM)
        : item.DilutedEPSTTM,
      QuarterlyEarningsGrowthYOY: Number(item.QuarterlyEarningsGrowthYOY)
        ? Number(item.QuarterlyEarningsGrowthYOY)
        : item.QuarterlyEarningsGrowthYOY,
      QuarterlyRevenueGrowthYOY: Number(item.QuarterlyRevenueGrowthYOY)
        ? Number(item.QuarterlyRevenueGrowthYOY)
        : item.QuarterlyRevenueGrowthYOY,
      AnalystTargetPrice: Number(item.AnalystTargetPrice)
        ? Number(item.AnalystTargetPrice)
        : item.AnalystTargetPrice,
      TrailingPE: Number(item.TrailingPE)
        ? Number(item.TrailingPE)
        : item.TrailingPE,
      ForwardPE: Number(item.ForwardPE)
        ? Number(item.ForwardPE)
        : item.ForwardPE,
      PriceToSalesRatioTTM: Number(item.PriceToSalesRatioTTM)
        ? Number(item.PriceToSalesRatioTTM)
        : item.PriceToSalesRatioTTM,
      PriceToBookRatio: Number(item.PriceToBookRatio)
        ? Number(item.PriceToBookRatio)
        : item.PriceToBookRatio,
      EVToRevenue: Number(item.EVToRevenue)
        ? Number(item.EVToRevenue)
        : item.EVToRevenue,
      EVToEBITDA: Number(item.EVToEBITDA)
        ? Number(item.EVToEBITDA)
        : item.EVToEBITDA,
      Beta: Number(item.Beta) ? Number(item.Beta) : item.Beta,
      "52WeekHigh": Number(item?.["52WeekHigh"])
        ? Number(item?.["52WeekHigh"])
        : item?.["52WeekHigh"],
      "52WeekLow": Number(item?.["52WeekLow"])
        ? Number(item?.["52WeekLow"])
        : item?.["52WeekLow"],
      "50DayMovingAverage": Number(item?.["50DayMovingAverage"])
        ? Number(item?.["50DayMovingAverage"])
        : item?.["50DayMovingAverage"],
      "200DayMovingAverage": Number(item["200DayMovingAverage"])
        ? Number(item["200DayMovingAverage"])
        : item["200DayMovingAverage"],
      SharesOutstanding: Number(item.SharesOutstanding)
        ? Number(item.SharesOutstanding)
        : item.SharesOutstanding,
      DividendDate: Date(item.DividendDate),
      ExDividendDate: Date(item.ExDividendDate),
    };
  });
  return output;
}



export function getCompanyIncomeDataBySymbol(value: string) {
  console.log("Get Company INCOME data from API file.....");
  const result = incomeData.filter((stock) => {
    return stock?.symbol === value;
  });
  const output = result.map((item) => {
    return {
      symbol: item.symbol,
      annualReports: item.annualReports.map((element) => {
        return {
          fiscalDateEnding: Date(element.fiscalDateEnding),
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
      quarterlyReports: item.quarterlyReports.map((element) => {
        return {
          fiscalDateEnding: Date(element.fiscalDateEnding),
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
  });
  return output;
}

export function getCompanyBalanceSheetDataBySymbol(value: string) {
  console.log("Get Company INCOME data from API file.....");
  const result = balanceData.filter((stock) => {
    return stock?.symbol === value;
  });

  const output = result.map((item) => {
    return {
      symbol: item.symbol,
      annualReports: item.annualReports.map((element) => {
        return {
          fiscalDateEnding: Date(element.fiscalDateEnding),
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
      quarterlyReports: item.annualReports.map((element) => {
        return {
          fiscalDateEnding: Date(element.fiscalDateEnding),
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
  });
  return output;
}

function getTimeSeries(item: StockDailyData){
    // { [key: string]: [] }
    const result:  { [key: string]: DailyData } = {};
    Object.keys(item["Time Series (Daily)"]).forEach(function (key: keyof TimeSeriesDaily) {

        const value = item["Time Series (Daily)"][key] as DailyData;
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
            "3. Last Refreshed": Date(item["Meta Data"]["2. Symbol"]),
            "4. Output Size": item["Meta Data"]["2. Symbol"],
            "5. Time Zone": item["Meta Data"]["2. Symbol"],
          },
        "Time Series (Daily)": resultObject
    }
    });
    console.log("-------------OUTPUT Daily data in API : ",output);
    return output;
  }
