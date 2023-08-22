export interface StockDailyData {
    "Meta Data": MetaData[]
    "Time Series (Daily)": TimeSeriesDaily[]
  }
  
  export interface MetaData {
    "1. Information": string
    "2. Symbol": string
    "3. Last Refreshed": Date
    "4. Output Size": string
    "5. Time Zone": string
  }
  
  export interface TimeSeriesDaily {
    [key: string]: DailyData
  }
  
  export interface DailyData {
    "1. open": number
    "2. high": number
    "3. low": number
    "4. close": number
    "5. volume": number
  }