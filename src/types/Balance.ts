export interface BalanceSheet {
  symbol: string
  annualReports: AnnualReport[]
  quarterlyReports: QuarterlyReport[]
}

export interface AnnualReport {
  fiscalDateEnding: Date
  reportedCurrency: string
  totalAssets: number
  totalCurrentAssets: number
  cashAndCashEquivalentsAtCarryingValue: number
  cashAndShortTermInvestments: number
  inventory: number
  currentNetReceivables: number
  totalNonCurrentAssets: number
  propertyPlantEquipment: number
  accumulatedDepreciationAmortizationPPE: number
  intangibleAssets: number
  intangibleAssetsExcludingGoodwill: number
  goodwill: number
  investments: number
  longTermInvestments: number
  shortTermInvestments: number
  otherCurrentAssets: number
  otherNonCurrentAssets: number
  totalLiabilities: number
  totalCurrentLiabilities: number
  currentAccountsPayable: number
  deferredRevenue: number
  currentDebt: number
  shortTermDebt: number
  totalNonCurrentLiabilities: number
  capitalLeaseObligations: number
  longTermDebt: number
  currentLongTermDebt: number
  longTermDebtNoncurrent: number
  shortLongTermDebtTotal: number
  otherCurrentLiabilities: number
  otherNonCurrentLiabilities: number
  totalShareholderEquity: number
  treasuryStock: number
  retainedEarnings: number
  commonStock: number
  commonStockSharesOutstanding: number
}

export interface QuarterlyReport {
  fiscalDateEnding: Date
  reportedCurrency: string
  totalAssets: number
  totalCurrentAssets: number
  cashAndCashEquivalentsAtCarryingValue: number
  cashAndShortTermInvestments: number
  inventory: number
  currentNetReceivables: number
  totalNonCurrentAssets: number
  propertyPlantEquipment: number
  accumulatedDepreciationAmortizationPPE: number
  intangibleAssets: number
  intangibleAssetsExcludingGoodwill: number
  goodwill: number
  investments: number
  longTermInvestments: number
  shortTermInvestments: number
  otherCurrentAssets: number
  otherNonCurrentAssets: number
  totalLiabilities: number
  totalCurrentLiabilities: number
  currentAccountsPayable: number
  deferredRevenue: number
  currentDebt: number
  shortTermDebt: number
  totalNonCurrentLiabilities: number
  capitalLeaseObligations: number
  longTermDebt: number
  currentLongTermDebt: number
  longTermDebtNoncurrent: number
  shortLongTermDebtTotal: number
  otherCurrentLiabilities: number
  otherNonCurrentLiabilities: number
  totalShareholderEquity: number
  treasuryStock: number
  retainedEarnings: number
  commonStock: number
  commonStockSharesOutstanding: number
}