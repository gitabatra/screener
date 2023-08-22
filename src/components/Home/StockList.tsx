import { BalanceSheet, Company, IncomeSheet, StockDailyData, StockData } from "../../types";
import { Link } from "react-router-dom";
// import { useState } from "react";

interface StockListProps {
    setInput: (name: string) => void;
    result : StockData[],
    chartData: StockDailyData[],
    balanceSheetData: BalanceSheet[],
    income: IncomeSheet[]
}

function StockList({result,chartData,balanceSheetData,income,setInput}: StockListProps){
  const stockTicker = [
    {symbol: 'IBM',name: 'International Business Machines'},
    {symbol: 'BA',name: 'The Boeing Company',},
    {symbol: 'BABA',name: 'Alibaba Group Holding Ltd'},
    {symbol: 'BAC',name: 'Bank of America Corp'},
    {symbol: 'SAIC',name: 'Science Applications International Corp (SAIC)'}
    ]
    return (<>

        <div className="grid grid-cols-1 divide-y divide-gray-700 rounded-lg shadow w-70 dark:bg-gray-700 z-10 h-40 overflow-y-auto absolute">
           {(stockTicker as unknown as Company).map((res, index: number) => {
             console.log("symbol: ", res);
             return (
              <div key={res.symbol} >
              <Link to={`/stock/${res.symbol}`} state={{result: result, chart:chartData,balance:balanceSheetData, income:income}}>
               <div className="px-2 py-1 hover:bg-gray-500" key={index} onClick={() => {
                console.log("Input value: ",res.symbol);
                 setInput(res.symbol);
                  // , { state: { result: res} }
               } }>
                 {res.symbol} -{res.name} 
               </div>
               </Link>
               </div>
             );
              
           })}
         </div>
    </>);
}

export default StockList;