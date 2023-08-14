import { BalanceSheet, StockDailyData, StockData } from "../../types";
import { Link } from "react-router-dom";
import { useState } from "react";

interface StockListProps {
    result : StockData,
    setInput: (name: string) => void;
}

function StockList({result,setInput}: StockListProps){
  const [chartData, setChartData] = useState<StockDailyData[]>();
  const [balanceSheetData, setBalanceSheetData] = useState<BalanceSheet[]>();
  // const [quarterData, setQuarterData] = useState<BalanceSheet>();

  const fetchChartData=(value: string)=> {
    console.log("fetch data for chart info is executing.....");
    void fetch("../../../data/companyDailySeriesData.json")
    .then((response) => response.json())
    .then((json)=>{
      const result = (json as StockDailyData[]).filter(stock => {
        return stock?.["Meta Data"]?.["2. Symbol"]?.includes(value)
      })
      console.log("chartdata",result);
      setChartData(result);
    });
  }

  const fetchBalanceSheetData=(value: string)=> {
    console.log("fetch data for balance sheet info is executing.....");
    void fetch("../../../data/companyBalanceSheet.json")
    .then((response) => response.json())
    .then((json)=>{
      const bsData = (json as BalanceSheet[]).filter(stock => {
        console.log("BS data: ",stock);
        return stock?.symbol?.includes(value)
      })
      console.log("----BS",bsData);
      setBalanceSheetData(bsData);
    });
  }

    return (<>
         {/* <div className="grid grid-cols-1 divide-y divide-gray-700 rounded-lg shadow w-70 dark:bg-gray-700 z-10 h-40 overflow-y-auto absolute">
           {result.map((res: StockData, index: number) => {
             console.log("symbol: ", res);
             return (
               <div className="px-2 py-1 hover:bg-gray-500" key={index} onClick={() => {
                 setInput(res.Name);
                //  fetchChartData(res.Symbol);
                //  fetchBalanceSheetData(res.Symbol);
                 navigate(`/stock/${res.Symbol}`
                  // , { state: { result: res, chart:chartData, balanceSheetData:balanceSheetData } }
                 );
               } }>
                 {res.Name}
               </div>
             );

           })}
         </div> */}

         <div className="grid grid-cols-1 divide-y divide-gray-700 rounded-lg shadow w-70 dark:bg-gray-700 z-10 h-40 overflow-y-auto absolute">
           {result.map((res: StockData, index: number) => {
             console.log("symbol: ", res);
             return (
              <div key={res.Symbol} >
              <Link to={`/stock/${res.Symbol}`} state={{result:res, chart:chartData, balance:balanceSheetData}}>
               <div className="px-2 py-1 hover:bg-gray-500" key={index} onClick={() => {
                 setInput(res.Name);
                 fetchChartData(res.Symbol);
                 fetchBalanceSheetData(res.Symbol);
                  // , { state: { result: res} }
               } }>
                 {res.Name}
               </div>
               </Link>
               </div>
             );
              
           })}
         </div>
    </>);
}

export default StockList;