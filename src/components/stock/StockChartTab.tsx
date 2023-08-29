import { useState } from "react";
import { StockDailyData, TimeSeriesDaily } from "../../types";
import StockMultiChart from "./StockMultiChart";
import {getMonthDate, 
    // getChartDataByMonth, getChartDataByYear, getDailyStockChartData, 
    getYearDate} from "./chartDataAPI";
// import TestChart from "./TestChart";

interface stockProp{
    id: string,
    chartData: StockDailyData[]
   }

function StockChartTab({id,chartData}: stockProp){
    const [chartTabIndex,setChartTabIndex] = useState(0);
    console.log("Id in Chart: ",id);

    const monthDate =  getMonthDate(1);
    const sixmonthDate =  getMonthDate(6);
    console.log("Six month Date: ",sixmonthDate);
    const oneYearDate = getYearDate(1);
    const threeYearDate = getYearDate(3);
    const fiveYearDate = getYearDate(5);
    const dailyData: TimeSeriesDaily[] = chartData[0]["Time Series (Daily)"];

    console.log("------six month dates:",sixmonthDate);
    // console.log("Report after 2020", Object.keys(dailyData));
    const keys = Object.keys(dailyData)
    const month: string[] = []
    const sixMonth = []
    const oneYear = []
    const threeYear = []
    const fiveYear = []

    for (let i=0; i< keys.length; i++){
      const datestr = new Date(keys[i]).getTime();
      if(monthDate.getTime()< datestr){
        month.push(keys[i]);
      }
      if(sixmonthDate.getTime() < datestr){
        sixMonth.push(keys[i]);
      }
      if(oneYearDate.getTime() < datestr){
        oneYear.push(keys[i]);
      }
      if(threeYearDate.getTime() < datestr){
        threeYear.push(keys[i]);
      }
      if(fiveYearDate.getTime() < datestr){
        fiveYear.push(keys[i]);
      }
    }

    return(<>
    <div className="py-10 text-white">
     <div className="mt-10 pt-10"></div>
    <div id="stock-chart-tab" className="pb-4 px-6 pt-8 " > 
    <div className="ml-4 mr-4 pl-4 py-6 border border-gray-700 rounded-lg">
    {/* <h1 className="text-2xl pb-4">Chart</h1> */}
         {/* <div className="mt-20 pt-10"></div> */}
    <div className="flex flex-wrap -mb-px text-sm font-medium text-center">
        <div className="border border-gray-700 rounded-lg p-3" >
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

        <div className={`inline-block px-4 py-3 rounded-lg hover:bg-sky-600 hover:text-white cursor-pointer
        ${chartTabIndex === 4 ? "bg-sky-600" : ""}` }
            onClick={()=>{setChartTabIndex(4)}}>5 year</div>
        </div>
    </div>
    <div id="myTabContent">
    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"  hidden={chartTabIndex !== 0}>
        <StockMultiChart month={month} dailyData={dailyData} chartTabIndex={chartTabIndex}/>
    </div>
    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"  hidden={chartTabIndex !== 1}>
        <StockMultiChart month={sixMonth} dailyData={dailyData} chartTabIndex={chartTabIndex}/>
    </div>
    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"  hidden={chartTabIndex !== 2}>
        <StockMultiChart month={oneYear} dailyData={dailyData} chartTabIndex={chartTabIndex}/>
    </div>
    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"  hidden={chartTabIndex !== 3}>
        <StockMultiChart month={threeYear} dailyData={dailyData} chartTabIndex={chartTabIndex}/>
    </div>
    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"  hidden={chartTabIndex !== 4}>
        <StockMultiChart month={fiveYear} dailyData={dailyData} chartTabIndex={chartTabIndex}/>
    </div>
    </div>
</div>
</div>
</div>
</>);
}

export default StockChartTab