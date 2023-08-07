import BalanceSheet from "./BalanceSheet";
import Chart from "./Chart";
// import DashboardTab from "./DashboardTab";
import ProfitLoss from "./ProfitLoss";
import QuarterlyResult from "./QuarterlyResult";
import StockInfo from "./StockInfo";
import { RefObject, useRef, useState } from 'react';

function DashboardTab(){
    const [active, setActive] = useState(false);
    const stockInfo = useRef<HTMLDivElement>(null);
    const chart = useRef<HTMLDivElement>(null);
    const quarters = useRef<HTMLDivElement>(null);
    const profitLoss = useRef<HTMLDivElement>(null);
    const balanceSheet = useRef<HTMLDivElement>(null);

    const scrollHandler = (elementRef: RefObject<HTMLDivElement>)=>{
        console.log(elementRef);
        window.scrollTo({top: elementRef.current?.offsetTop, behavior: "smooth"})
    }

    return (<>
    <div className="py-12 text-white">
         <div className="px-4 fixed w-full z-10">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 ">
            <li className="mr-2">
              <button
                // aria-current={"page"}
                className= {`inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500 ${active}  ? active : ''`}
                // className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500  {`${active}` ? "active" : ""} "
                onClick={()=>{scrollHandler(stockInfo)}}
              >
                Stock
              </button>
            </li>
            <li className="mr-2">
              <button
                className= {`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${active}? active : ''`}
                onClick={()=>{scrollHandler(chart);setActive(true);} }
              >
                Chart
              </button>
            </li>
            <li className="mr-2">
              <button
                className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                onClick={()=>{scrollHandler(quarters)}}
              >
                Quarters
              </button>
            </li>
            <li className="mr-2">
              <button
                className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                onClick={()=>{scrollHandler(profitLoss)}}
              >
                Profit & Loss
              </button>
            </li>
            <li className="mr-2">
              <button
                className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                onClick={()=>{scrollHandler(balanceSheet)}}
              >
                Balance Sheet
              </button>
            </li>
          </ul>
        </div>
        <div ref={stockInfo} className="h-screen text-white pt-10 border-1 z-[-1]"> <StockInfo /></div>
        <div ref={chart} className="h-screen text-white mt-15 z-[-1]"> <Chart /></div>
        <div ref={quarters} className="h-screen text-white mt-15 z-[-1]"> <QuarterlyResult /></div>
        <div ref={profitLoss} className="h-screen text-white z-[-1]"> <ProfitLoss /></div>
        <div ref={balanceSheet} className="h-screen text-white z-[-1]"> <BalanceSheet /></div>
      </div>
    </>);
}

export default DashboardTab;