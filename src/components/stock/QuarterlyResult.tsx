import {  IncomeSheet } from "../../types";
import IncomeTableRow from "./IncomeTableRow";

interface stockProp{
    id: string,
    quarterData: IncomeSheet
   }

function QuarterlyResult({id,quarterData}:stockProp){
    const quarterResult = quarterData?.quarterlyReports;
    console.log("quarter data",id, quarterResult);
    const datestr = new Date("2020-12-31").getTime();
    
    const reportData = quarterResult.filter((res) =>{
        const date = new Date(res.fiscalDateEnding);
        return ((date.getTime()> datestr))})
    
    const report = [...reportData].reverse();
    console.log("Report after 2020", report);

    if (!quarterData) {
        return <div></div>
      }
    
    return (<>
     <div className="py-10 px-10 text-white">
     <div className="mt-20 pt-10"></div>
     <div className=" pt-2">
        <h1 className="text-2xl">Quarterly Results</h1>
        <div className="overflow-x-auto shadow-md sm:rounded-lg pt-4">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th></th>
                {
                    report.map((result,index) =>{
                        const date = new Date(result.fiscalDateEnding).toLocaleString('en-us',{month:'short', year:'numeric'})
                        return( 
                        <th key={index} scope="col" className="px-6 py-3">
                             {date}
                        </th>)
                    })
                }
            </tr>
        </thead>
        <tbody>
        <IncomeTableRow label={"Sales"} annualReportData={report} resKey={"totalRevenue"}/>
           <IncomeTableRow label={"Expenses"} annualReportData={report} resKey={"costOfRevenue"}/>
           <IncomeTableRow label={"Operating Profit"} annualReportData={report} resKey={"grossProfit"}/>
           <IncomeTableRow label={"Other Income"} annualReportData={report} resKey={"interestIncome"}/>
           <IncomeTableRow label={"Interest Expense"} annualReportData={report} resKey={"interestExpense"}/>
           <IncomeTableRow label={"Depreciation"} annualReportData={report} resKey={"depreciation"}/>
           <IncomeTableRow label={"Income Before Tax"} annualReportData={report} resKey={"incomeBeforeTax"}/>
           <IncomeTableRow label={"Tax"} annualReportData={report} resKey={"incomeTaxExpense"}/>
           <IncomeTableRow label={"Net Income"} annualReportData={report} resKey={"netIncome"}/>
        </tbody>
    </table>
</div>
    </div>
    </div>
    </>);
}

export default QuarterlyResult;