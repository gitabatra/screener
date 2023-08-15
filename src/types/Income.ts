export interface IncomeSheet {
    symbol: string
    annualReports: AnnualIncomeReport[]
    quarterlyReports: QuarterlyIncomeReport[]
  }
  
  export interface AnnualIncomeReport {
    fiscalDateEnding: string
    reportedCurrency: string
    grossProfit: string
    totalRevenue: string
    costOfRevenue: string
    costofGoodsAndServicesSold: string
    operatingIncome: string
    sellingGeneralAndAdministrative: string
    researchAndDevelopment: string
    operatingExpenses: string
    investmentIncomeNet: string
    netInterestIncome: string
    interestIncome: string
    interestExpense: string
    nonInterestIncome: string
    otherNonOperatingIncome: string
    depreciation: string
    depreciationAndAmortization: string
    incomeBeforeTax: string
    incomeTaxExpense: string
    interestAndDebtExpense: string
    netIncomeFromContinuingOperations: string
    comprehensiveIncomeNetOfTax: string
    ebit: string
    ebitda: string
    netIncome: string
  }
  
  export interface QuarterlyIncomeReport {
    fiscalDateEnding: string
    reportedCurrency: string
    grossProfit: string
    totalRevenue: string
    costOfRevenue: string
    costofGoodsAndServicesSold: string
    operatingIncome: string
    sellingGeneralAndAdministrative: string
    researchAndDevelopment: string
    operatingExpenses: string
    investmentIncomeNet: string
    netInterestIncome: string
    interestIncome: string
    interestExpense: string
    nonInterestIncome: string
    otherNonOperatingIncome: string
    depreciation: string
    depreciationAndAmortization: string
    incomeBeforeTax: string
    incomeTaxExpense: string
    interestAndDebtExpense: string
    netIncomeFromContinuingOperations: string
    comprehensiveIncomeNetOfTax: string
    ebit: string
    ebitda: string
    netIncome: string
  }
  