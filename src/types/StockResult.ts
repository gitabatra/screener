export interface StockResult {
    userId:number,
    id: number,
    title: string,
    body: string
  }


  export interface StockDailyData {
    "Meta Data": MetaData
    "Time Series (Daily)": TimeSeriesDaily
  }
  
  export interface MetaData {
    "1. Information": string
    "2. Symbol": string
    "3. Last Refreshed": string
    "4. Output Size": string
    "5. Time Zone": string
  }
  
  export interface TimeSeriesDaily {
    "2023-08-11": DailyData
  }
  
  export interface DailyData {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
// export interface StockDailyData {
//   metaData: {
//     Iinformation: string,
//     symbol: string,
//     lastRefreshed: Date,
//     outputSize: string,
//     timeZone: string
// },
// timeSeries: {
//     date: {
//         open: number,
//         high: number,
//         low: number,
//         close: number,
//         volume: number,
//     },
// }
// }

// export interface StockData {
//   Symbol: string,
//   AssetType: string,
//   Name: string,
//   Description:  string,
//   CIK: string,
//   Exchange: string,
//   Currency: string,
//   Country: string,
//   Sector: string,
//   Industry: string,
//   Address: string,
//   FiscalYearEnd: string,
//   LatestQuarter: Date,
//   MarketCapitalization: number,
//   EBITDA: number,
//   PERatio: number,
//   PEGRatio: number,
//   BookValue: number,
//   DividendPerShare: number,
//   DividendYield: number,
//   EPS: number,
//   RevenuePerShareTTM: number,
//   ProfitMargin: number,
//   OperatingMarginTTM: number,
//   ReturnOnAssetsTTM: number,
//   ReturnOnEquityTTM: number,
//   RevenueTTM: number,
//   GrossProfitTTM: number,
//   DilutedEPSTTM: number,
//   QuarterlyEarningsGrowthYOY: number,
//   QuarterlyRevenueGrowthYOY: number, //negative number
//   AnalystTargetPrice: number,
//   TrailingPE: number,
//   ForwardPE: number,
//   PriceToSalesRatioTTM: number,
//   PriceToBookRatio: number,
//   EVToRevenue: number,
//   EVToEBITDA: number,
//   Beta: number,
//   WeekHigh_52: number,
//   WeekLow_52: number,
//   DayMovingAverage_50: number,
//   DayMovingAverage_200: number,
//   SharesOutstanding: number,
//   DividendDate: Date,
//   ExDividendDate: Date
// }

export interface StockData {
  map(arg0: (res: any, index: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
  Symbol: string
  AssetType: string
  Name: string
  Description: string
  CIK: string
  Exchange: string
  Currency: string
  Country: string
  Sector: string
  Industry: string
  Address: string
  FiscalYearEnd: string
  LatestQuarter: string
  MarketCapitalization: string
  EBITDA: string
  PERatio: string
  PEGRatio: string
  BookValue: string
  DividendPerShare: string
  DividendYield: string
  EPS: string
  RevenuePerShareTTM: string
  ProfitMargin: string
  OperatingMarginTTM: string
  ReturnOnAssetsTTM: string
  ReturnOnEquityTTM: string
  RevenueTTM: string
  GrossProfitTTM: string
  DilutedEPSTTM: string
  QuarterlyEarningsGrowthYOY: string
  QuarterlyRevenueGrowthYOY: string
  AnalystTargetPrice: string
  TrailingPE: string
  ForwardPE: string
  PriceToSalesRatioTTM: string
  PriceToBookRatio: string
  EVToRevenue: string
  EVToEBITDA: string
  Beta: string
  "52WeekHigh": string
  "52WeekLow": string
  "50DayMovingAverage": string
  "200DayMovingAverage": string
  SharesOutstanding: string
  DividendDate: string
  ExDividendDate: string
}

export interface BalanceSheet {
  symbol: string
  annualReports: AnnualReport[]
}

export interface AnnualReport {
  fiscalDateEnding: string
  reportedCurrency: string
  totalAssets: string
  totalCurrentAssets: string
  cashAndCashEquivalentsAtCarryingValue: string
  cashAndShortTermInvestments: string
  inventory: string
  currentNetReceivables: string
  totalNonCurrentAssets: string
  propertyPlantEquipment: string
  accumulatedDepreciationAmortizationPPE: string
  intangibleAssets: string
  intangibleAssetsExcludingGoodwill: string
  goodwill: string
  investments: string
  longTermInvestments: string
  shortTermInvestments: string
  otherCurrentAssets: string
  otherNonCurrentAssets: string
  totalLiabilities: string
  totalCurrentLiabilities: string
  currentAccountsPayable: string
  deferredRevenue: string
  currentDebt: string
  shortTermDebt: string
  totalNonCurrentLiabilities: string
  capitalLeaseObligations: string
  longTermDebt: string
  currentLongTermDebt: string
  longTermDebtNoncurrent: string
  shortLongTermDebtTotal: string
  otherCurrentLiabilities: string
  otherNonCurrentLiabilities: string
  totalShareholderEquity: string
  treasuryStock: string
  retainedEarnings: string
  commonStock: string
  commonStockSharesOutstanding: string
}

export interface Stock{
  symbol: string,
  name: string
}


export interface Ticker {
  bestMatches: BestMatch[]
}

export interface BestMatch {
  "1. symbol": string
  "2. name": string
  "3. type": string
  "4. region": string
  "5. marketOpen": string
  "6. marketClose": string
  "7. timezone": string
  "8. currency": string
  "9. matchScore": string
}