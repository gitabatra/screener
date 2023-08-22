import { IncomeSheet } from "../../types";
import { formatNumber } from "../../utils/api";

interface stockProp{
    id: string,
    annualIncomeData: IncomeSheet[]
   }
function ProfitLoss({id,annualIncomeData}: stockProp){
    const annualReportData = (annualIncomeData?.[0]?.annualReports)
    console.log("Annual report data: ",id);
    return (<>
     <div className="py-10 text-white min-h-screen">
     <div className="mt-20 pt-10"></div>
     <div className="pl-6 pt-8">
        <h1 className="text-2xl">Profit & Loss</h1>
        <div className="overflow-x-auto shadow-md sm:rounded-lg pt-4">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    
                </th>
                {annualReportData.map((result,index) =>{
                const date = new Date(result.fiscalDateEnding).toLocaleString('en-us',{month:'short', year:'numeric'})
                // const dateObj = date.get;
                return(
                <th key={index} scope="col" className="px-6 py-3">
                    {date}
                </th>
                )
               })}
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Sales
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.totalRevenue)}
                </td>
            )})}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Expenses
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.costOfRevenue)}
                </td>
            )})}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Operating Profit
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.grossProfit)}
                </td>
            )})}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Other Income
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.interestIncome)}
                </td>
            )})}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Interest Expense
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.interestExpense)}
                </td>
            )})}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Depreciation
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.depreciation)}
                </td>
            )})}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Profit Before Tax
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.incomeBeforeTax)}
                </td>
            )})}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Tax
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.incomeTaxExpense)}
                </td>
            )})}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Net Profit
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.netIncome)}
                </td>
            )})}
            </tr>
        </tbody>
    </table>
</div>
    </div>
    </div>
    </>);
}

export default ProfitLoss;