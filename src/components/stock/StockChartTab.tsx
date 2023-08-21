import { useState } from "react";
import { StockDailyData, TimeSeriesDaily } from "../../types";
import StockMultiChart from "./StockMultiChart";

interface stockProp{
    id: string,
    chartData: StockDailyData[]
   }

function StockChartTab({id,chartData}: stockProp){
    const [chartTabIndex,setChartTabIndex] = useState(0);
    console.log("Id in Chart: ",id);
    const monthDate = new Date();
    monthDate.setMonth(monthDate.getMonth() - 1);
    console.log("Date: ",monthDate);

    const sixmonthDate = new Date();
    sixmonthDate.setMonth(sixmonthDate.getMonth() - 6);
    console.log("Six month Date: ",sixmonthDate);

    // const intYear = sixmonthDate.getFullYear() - 1;
    const dailyData: TimeSeriesDaily[] = chartData[0]["Time Series (Daily)"];
    console.log("------six month dates:",sixmonthDate);
    console.log("Report after 2020", Object.keys(dailyData));
    const keys = Object.keys(dailyData)
    const month: string[] = []
    // const monthData: number[] = []
    const sixMonth = []

    for (let i=0; i< keys.length; i++){
      const datestr = new Date(keys[i]).getTime();
      if(monthDate.getTime()< datestr){
        month.push(keys[i]);
      }
      if(sixmonthDate.getTime() < datestr){
        sixMonth.push(keys[i]);
      }
    }
    return(<>
    <div className="pb-4 px-4">
    <div className="flex flex-wrap -mb-px text-sm font-medium text-center">
        <div className={`inline-block px-4 py-3 rounded-lg text-white hover:bg-sky-600 hover:text-white cursor-pointer mr-2
        ${chartTabIndex === 0 ? "bg-sky-600" : ""}`} 
        // style = {chartTabIndex === 0 ? {backgroundColor:"#0891b2"} : ""}
        onClick={()=>{setChartTabIndex(0)}}>1m</div>

        <div className={`inline-block px-4 py-3 rounded-lg hover:bg-sky-600 hover:text-white cursor-pointer mr-2
        ${chartTabIndex === 1 ? "bg-sky-600" : ""}`}  
            onClick={()=>{setChartTabIndex(1)}}>6m</div>
     
        <div className={`inline-block px-4 py-3 rounded-lg hover:bg-sky-600 hover:text-white cursor-pointer mr-2
        ${chartTabIndex === 2 ? "bg-sky-600" : ""} `}
            onClick={()=>{setChartTabIndex(2)}}>1 year</div>
   
        <div className={`inline-block px-4 py-3 rounded-lg hover:bg-sky-600 hover:text-white cursor-pointer mr-2
        ${chartTabIndex === 3 ? "bg-sky-600" : ""}` }
            onClick={()=>{setChartTabIndex(3)}}>3 year</div>
    </div>
    <div id="myTabContent">
    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"  hidden={chartTabIndex !== 0}>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-white">1 month
        </p>
        <StockMultiChart month={month} dailyData={dailyData}/>
    </div>
    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"  hidden={chartTabIndex !== 1}>
        <p className="text-sm text-gray-500 dark:text-gray-400">6 month</p>
    </div>
    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"  hidden={chartTabIndex !== 2}>
        <p className="text-sm text-gray-500 dark:text-gray-400">1 year</p>
    </div>
    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"  hidden={chartTabIndex !== 3}>
        <p className="text-sm text-gray-500 dark:text-gray-400"> 3 year</p>
    </div>
</div>
</div>
</>);
}

export default StockChartTab