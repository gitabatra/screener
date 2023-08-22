

// import { StockDailyData } from "../../types";

import { TimeSeriesDaily } from "../../types";
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
  } from 'chart.js';
  import { Chart } from 'react-chartjs-2';

  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  );

  

interface stockProp{
    month: string[],
    dailyData: TimeSeriesDaily[]
   }

function StockMultiChart({month,dailyData}: stockProp){
// console.log("Id in Chart: ",id);
// const monthDate = new Date();
// monthDate.setMonth(monthDate.getMonth() - 1);
// console.log("Date: ",monthDate);

//     const sixmonthDate = new Date();
//     sixmonthDate.setMonth(sixmonthDate.getMonth() - 6);
//     console.log("Six month Date: ",sixmonthDate);

//     // const intYear = sixmonthDate.getFullYear() - 1;
//     const dailyData: TimeSeriesDaily[] = chartData[0]["Time Series (Daily)"];
//     console.log("------six month dates:",sixmonthDate);
//     console.log("Report after 2020", Object.keys(dailyData));
//     const keys = Object.keys(dailyData)
//     const month: string[] = []
//     // const monthData: number[] = []
//     const sixMonth = []

//     for (let i=0; i< keys.length; i++){
//       const datestr = new Date(keys[i]).getTime();
//       if(monthDate.getTime()< datestr){
//         month.push(keys[i]);
//       }
//       if(sixmonthDate.getTime() < datestr){
//         sixMonth.push(keys[i]);
//       }
//     }

// const filteredMonthData = Object.keys(dailyData)
//     .filter(key => month.includes(key))
//     .reduce((obj, key) => {
//         obj[key] = dailyData[key];
//         return obj;
//   }, []);

// console.log("filtered Month data",filteredMonthData);

// for (let value of Object.values(filteredMonthData)) {
//   monthData.push(parseFloat(value?.["4. close"]));
//   console.log(value?.["4. close"]); // John, then 30
// }

  const labels = month;

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart',
      },
    },
    scales: {
        volume: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        // steps: 20,
        // stepValue: 50000,
        // min: 0,
        // max: 100000000,
        title: {
            display: true,
            text: "Volume"
          },
      },
      price: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        steps: 10,
        // stepValue: 50,
        // min: 0,
        // max: 500,
        title: {
            display: true,
            text: "Price"
          },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };


  const data = {
    labels,
    datasets: [
      {
        type: 'line' as const,
        stack: 'combined',
        label: 'Price',
        borderColor: '#0ea5e9',
        borderWidth: 2,
        fill: false,
        yAxisID: "price",
        data: month.map((key) => {return ((dailyData[key as keyof TimeSeriesDaily[]] as TimeSeriesDaily)?.["4. close"])}),
        order: 0,
        tension: 0.4,
        pointRadius: 0
      },
      {
        type: 'bar' as const,
        stack: 'combined',
        label: 'volume',
        backgroundColor: '#a8a29e',
        yAxisID: "volume",
        data: 
        month.map((key) => {return (((dailyData[key as keyof TimeSeriesDaily[]] as TimeSeriesDaily)?.["5. volume"]))}),
          order: 1,
      },
    ],
  };

    return(<>
    <div id="stock-chart" className="py-10 text-white min-h-fit pb-10">
        {/* <div className="mt-20 pt-10"></div> */}
        <div className="px-6 pt-6">
        <h1 className="text-2xl">Chart</h1>
        <div className="w-full h-90">
        <Chart type='bar' options={options} data={data} style={{color:"white"}}/>
        </div>
        </div>
    </div>
    </>);
}

export default StockMultiChart;