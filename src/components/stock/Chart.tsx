// import { StockDailyData } from "../../types";

import { StockDailyData } from "../../types";

interface stockProp{
    id: string,
    chartData: StockDailyData[]
   }

function Chart({id,chartData}: stockProp){
   
   console.log(id,chartData[0]["Time Series (Daily)"]);
    return(<>
    <div id="stock-chart" className="py-10 text-white min-h-screen">
        <div className="mt-20 pt-10"></div>
        <div className="pl-6 pt-8">
        <h1 className="text-2xl">Chart</h1>
        </div>
    </div>
    </>);
}

export default Chart;