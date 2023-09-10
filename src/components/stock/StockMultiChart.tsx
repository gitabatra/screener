import { TimeSeriesDaily } from "../../types";
import {
    Chart as ChartJS,
    LinearScale,
    TimeScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
  } from 'chart.js';
  

  import 'chartjs-adapter-date-fns';
  import { Chart } from 'react-chartjs-2';


  ChartJS.register(
    LinearScale,
    TimeScale,
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
    dailyData: TimeSeriesDaily[],
    chartTabIndex : number
    // type: string
   }

function StockMultiChart({month,dailyData,chartTabIndex}: stockProp){
  // console.log("Chart index in StockMultiChart",chartTabIndex);
  let chartDataUnit: string = "day"
  // let dateFormat = 'MM/dd/yyyy'
  
  switch(chartTabIndex) { 
    case 0: { 
       //statements; 
       chartDataUnit = "day";
      //  dateFormat = 'MM/dd/yyyy'
       break; 
    } 
    case 1: { 
       //statements; 
       chartDataUnit = "month";
      //  dateFormat = 'MM/dd/yyyy'
       break; 
    } 
    case 2: { 
      //statements; 
      chartDataUnit = "month";
      // dateFormat = 'MM/dd/yyyy'
      break; 
   } 
   case 3: { 
    //statements; 
    chartDataUnit = "quarter";
    // dateFormat = 'MMM dd yyyy'
    break; 
  } 
  case 4: { 
    //statements; 
    chartDataUnit = "quarter";
    // dateFormat = 'MMM dd yyyy'
    break; 
  } 
    default: { 
       //statements; 
       break; 
    } 
 } 

  // console.log("Moth keys: ",month)
  const labels = month;


  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
      x: {
        type: 'time',
        position: 'bottom',
        time: {
          displayFormats: {'day': 'MMM dd yyyy'},
          // tooltipFormat: 'MM/dd/yyyy',
          tooltipFormat: 'MMM dd yyyy',
          unit: chartDataUnit,
         }
      },
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
        // #a8a29e
        yAxisID: "volume",
        data: 
        month.map((key) => {return (((dailyData[key as keyof TimeSeriesDaily[]] as TimeSeriesDaily)?.["5. volume"]))}),
          order: 1,
      },
    ],
  };

    return(<>
    <div id="stock-chart" className="py-10 text-white pb-10">
        <div className="px-6 pt-6">
        <div className="chart-container" style={{height:"55vh", 
        // width:"90vw"
        }}>
          {/* @ts-ignore */}
        <Chart type='bar' options={options} data={data} style={{color:"white"}}/>
        </div>
        </div>
    </div>
    </>);
}

export default StockMultiChart;