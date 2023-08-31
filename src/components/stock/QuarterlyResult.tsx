import {  IncomeSheet } from "../../types";
import IncomeTableRow from "./IncomeTableRow";

interface stockProp{
    id: string,
    quarterData: IncomeSheet
   }

function QuarterlyResult({id,quarterData}:stockProp){
    const quarterResult = quarterData?.quarterlyReports;
    console.log("quarter data",id);
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
        {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Sales
                </th>
                {
                    report.map((result,index) =>{
                        return( 
                            <td key={index} className="px-6 py-4">
                           {formatNumber(result?.totalRevenue)}
                        </td>)
                    })
                }
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Expenses
                </th>
                {
                    report.map((result,index) =>{
                        return( 
                            <td key={index} className="px-6 py-4">
                           {formatNumber(result?.costOfRevenue)}
                        </td>)
                    })
                }
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Operating Profit
                </th>
                {
                    report.map((result,index) =>{
                        return( 
                            <td key={index} className="px-6 py-4">
                           {formatNumber(result?.grossProfit)}
                        </td>)
                    })
                }
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Other Income
                </th>
                {
                    report.map((result,index) =>{
                        return( 
                            <td key={index} className="px-6 py-4">
                           {formatNumber(result?.interestIncome)}
                        </td>)
                    })
                }
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Interest Expense
                </th>
                {
                    report.map((result,index) =>{
                        return( 
                            <td key={index} className="px-6 py-4">
                           {formatNumber(result?.interestExpense)}
                        </td>)
                    })
                }
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Depreciation
                </th>
                {
                    report.map((result,index) =>{
                        return( 
                            <td key={index} className="px-6 py-4">
                           {formatNumber(result?.depreciation)}
                        </td>)
                    })
                }
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Profit Before Tax
                </th>
                {
                    report.map((result,index) =>{
                        return( 
                            <td key={index} className="px-6 py-4">
                           {formatNumber(result?.incomeBeforeTax)}
                        </td>)
                    })
                }
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Tax
                </th>
                {
                    report.map((result,index) =>{
                        return( 
                            <td key={index} className="px-6 py-4">
                           {formatNumber(result?.incomeTaxExpense)}
                        </td>)
                    })
                }
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Net Profit
                </th>
                {
                    report.map((result,index) =>{
                        return( 
                            <td key={index} className="px-6 py-4">
                           {formatNumber(result?.netIncome)}
                        </td>)
                    })
                }
            </tr> */}
           
        </tbody>
    </table>
</div>
    </div>
    </div>
    </>);
}

export default QuarterlyResult;