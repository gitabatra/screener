import { AnnualIncomeReport, IncomeSheet } from "../../types";
import IncomeTableRow from "./IncomeTableRow";

interface PLTableHeaderProp{
    annualReportData : AnnualIncomeReport[]
}

function PLTableHeaderRow({annualReportData}: PLTableHeaderProp){
    return(
        <tr>
                <th scope="col" className="px-6 py-3">
                </th>
                {annualReportData.map((result,index) =>{
                const date = new Date(result.fiscalDateEnding).toLocaleString('en-us',{month:'short', year:'numeric'})
                return(
                <th key={index} scope="col" className="px-6 py-3">
                    {date}
                </th>
                )
               })}
            </tr>
    )
}

interface StockProp{
    id: string,
    annualIncomeData: IncomeSheet
   }
function ProfitLoss({id,annualIncomeData}: StockProp){
    const annualReport = (annualIncomeData?.annualReports)
    const annualReportData = [...annualReport].reverse();
    console.log("Annual report data: ",id);
    if(!annualIncomeData){
        return(<div></div>)
    }
    return (<>
     <div className="py-10 px-10 text-white">
     <div className="mt-20 pt-10"></div>
        <h1 className="text-2xl">Profit & Loss</h1>
        <div className="overflow-x-auto shadow-md sm:rounded-lg pt-4">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <PLTableHeaderRow annualReportData={annualReportData} />
        </thead>
        <tbody>
           <IncomeTableRow label={"Sales"} annualReportData={annualReportData} resKey={"totalRevenue"}/>
           <IncomeTableRow label={"Expenses"} annualReportData={annualReportData} resKey={"costOfRevenue"}/>
           <IncomeTableRow label={"Operating Profit"} annualReportData={annualReportData} resKey={"grossProfit"}/>
           <IncomeTableRow label={"Other Income"} annualReportData={annualReportData} resKey={"interestIncome"}/>
           <IncomeTableRow label={"Interest Expense"} annualReportData={annualReportData} resKey={"interestExpense"}/>
           <IncomeTableRow label={"Depreciation"} annualReportData={annualReportData} resKey={"depreciation"}/>
           <IncomeTableRow label={"Income Before Tax"} annualReportData={annualReportData} resKey={"incomeBeforeTax"}/>
           <IncomeTableRow label={"Tax"} annualReportData={annualReportData} resKey={"incomeTaxExpense"}/>
           <IncomeTableRow label={"Net Income"} annualReportData={annualReportData} resKey={"netIncome"}/>
        </tbody>
    </table>
    </div>
    </div>
    </>);
}

export default ProfitLoss;