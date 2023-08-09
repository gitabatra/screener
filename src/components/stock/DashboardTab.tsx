import BalanceSheet from "./BalanceSheet";
import Chart from "./Chart";
// import DashboardTab from "./DashboardTab";
import ProfitLoss from "./ProfitLoss";
import QuarterlyResult from "./QuarterlyResult";
import StockInfo from "./StockInfo";
import { RefObject, useRef, useState } from 'react';

function DashboardTab(){
  const stockInfo = useRef<HTMLDivElement>(null);
  const chart = useRef<HTMLDivElement>(null);
  const quarters = useRef<HTMLDivElement>(null);
  const profitLoss = useRef<HTMLDivElement>(null);
  const balanceSheet = useRef<HTMLDivElement>(null);
  const tabObj = [{id:1,title:"Stock",ref:stockInfo},
  {id:2,title:"Chart",ref:chart},
  {id:3,title:"Quarters",ref:quarters},
  {id:4,title:"Profit & Loss",ref:profitLoss},
  {id:5,title:"Balance Sheet",ref:balanceSheet},
]

  const [toggleState, changeToggleState] = useState({activeTabObject: tabObj[0], 
  tabObjects:tabObj});
   

    const scrollHandler = (elementRef: RefObject<HTMLDivElement>)=>{
        console.log(elementRef.current?.id);
        window.scrollTo({top: elementRef.current?.offsetTop, behavior: "smooth"});
    }

    const toggleTab = (index: number)=>{
      console.log("Tab is toggled...",index);
      changeToggleState({...toggleState, activeTabObject: toggleState.tabObjects[index]})
    }

    const toggleActiveTabStyle = (index: number)=>{
       if(toggleState.tabObjects[index] === toggleState.activeTabObject){
        return "activeTab mr-2"
       }
    }

    return (<>
    <div className="py-12 text-white">
         <div className="px-4 fixed w-full z-10">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 bg-gray-800 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 ">
            {
              toggleState.tabObjects.map((element,index) =>{
                return( 
                <li key={index} className={toggleActiveTabStyle(index)}>
                <button
                  className= {`inline-block p-4 rounded-t-lg hover:text-sky-600`}
                  onClick={()=>{toggleTab(index);scrollHandler(element.ref)}}
                >
                  {element.title}
                </button>
              </li>)
              })
            }
          </ul>
        </div>
        <div ref={stockInfo} id="stock-info" className="py-10 h-screen text-white border-1 z-[-1]"> <StockInfo /></div>
        <div ref={chart} id="stock-chart" className="h-screen text-white mt-15 z-[-1]"> <Chart /></div>
        <div ref={quarters} id="stock-quarterly-results" className="h-screen text-white mt-15 z-[-1]"> <QuarterlyResult /></div>
        <div ref={profitLoss} id="stock-profit-loss" className="h-screen text-white z-[-1]"> <ProfitLoss /></div>
        <div ref={balanceSheet} id="stock-balance-sheet" className="h-screen text-white z-[-1]"> <BalanceSheet /></div>
      </div>
    </>);
}

export default DashboardTab;