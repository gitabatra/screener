import { BalanceSheet } from "../../types";
import { formatNumber } from "../../utils/api";

interface stockProp{
    id: string,
    annualData: BalanceSheet[]
   }

function StockBalanceSheet({id, annualData}: stockProp){
    console.log("Stock Balance sheet",id);
    const annualReportData = (annualData?.[0]?.annualReports)
    // console.log("Annual report data: ",annualReportData);
    return (<>
     <div className="py-10 text-white min-h-screen pb-14">
     <div className="mt-14 pt-12"></div>
     <div className="pl-6 pt-8">
        <h1 className="text-2xl">Balance Sheet</h1>

<div className="overflow-x-auto shadow-md sm:rounded-lg pt-4">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
        </thead>
        <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Total Assets 
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.totalAssets)}
                </td>
            )})}
        </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Total Current Assets
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.totalCurrentAssets)}
                </td>
            )})}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Fixed Assets
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.propertyPlantEquipment)}
                </td>
            )})}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Investments
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.investments)}
                </td>
            )})}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Long term Investments
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.longTermInvestments)}
                </td>
            )})}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    short term Investments
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.shortTermInvestments)}
                </td>
            )})}
            </tr>
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Borrowings
                </th>
            </tr> */}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Long Term Debt
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.longTermDebt)}
                </td>
            )})}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Current Long Term Debt
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.currentLongTermDebt)}
                </td>
            )})}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Long Term Debt NonCurrent
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.longTermDebtNoncurrent)}
                </td>
            )})}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Short Long Term Debt Total
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.shortLongTermDebtTotal)}
                </td>
            )})}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Share Capital
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.totalShareholderEquity)}
                </td>
            )})}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Reserves
                </th>
                {annualReportData.map((res,index)=>{return(
                <td key={index} className="px-6 py-4">
                {formatNumber(res?.retainedEarnings)}
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

export default StockBalanceSheet;