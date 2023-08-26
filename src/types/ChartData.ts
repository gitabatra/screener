import { TimeSeriesDaily } from "./StockDailyData"

export type ChartData = ChartDataDate[]

export interface ChartDataDate {
  [key : string]: TimeSeriesDaily[]
}

// export interface ChartDailyData {

// }