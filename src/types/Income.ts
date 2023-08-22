export interface IncomeSheet {
    symbol: string
    annualReports: AnnualIncomeReport[]
    quarterlyReports: QuarterlyIncomeReport[]
  }
  
  export interface AnnualIncomeReport {
    fiscalDateEnding: Date
    reportedCurrency: string
    grossProfit: number
    totalRevenue: number
    costOfRevenue: number
    costofGoodsAndServicesSold: number
    operatingIncome: number
    sellingGeneralAndAdministrative: number
    researchAndDevelopment: number
    operatingExpenses: number
    investmentIncomeNet: number
    netInterestIncome: number
    interestIncome: number
    interestExpense: number
    nonInterestIncome: number
    otherNonOperatingIncome: number
    depreciation: number
    depreciationAndAmortization: number
    incomeBeforeTax: number
    incomeTaxExpense: number
    interestAndDebtExpense: number
    netIncomeFromContinuingOperations: number
    comprehensiveIncomeNetOfTax: number
    ebit: number
    ebitda: number
    netIncome: number
  }
  
  export interface QuarterlyIncomeReport {
    fiscalDateEnding: Date
    reportedCurrency: string
    grossProfit: number
    totalRevenue: number
    costOfRevenue: number
    costofGoodsAndServicesSold: number
    operatingIncome: number
    sellingGeneralAndAdministrative: number
    researchAndDevelopment: number
    operatingExpenses: number
    investmentIncomeNet: number
    netInterestIncome: number
    interestIncome: number
    interestExpense: number
    nonInterestIncome: number
    otherNonOperatingIncome: number
    depreciation: number
    depreciationAndAmortization: number
    incomeBeforeTax: number
    incomeTaxExpense: number
    interestAndDebtExpense: number
    netIncomeFromContinuingOperations: number
    comprehensiveIncomeNetOfTax: number
    ebit: number
    ebitda: number
    netIncome: number
  }
  