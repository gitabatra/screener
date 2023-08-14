import StockBalanceSheet from "./StockBalanceSheet";
import Chart from "./Chart";
import ProfitLoss from "./ProfitLoss";
import QuarterlyResult from "./QuarterlyResult";
import StockInfo from "./StockInfo";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useParams, useLocation } from "react-router-dom";
import { BalanceSheet, StockData,StockDailyData } from "../../types";


interface locationProp{
  result: StockData,
  chartData: StockDailyData,
  balanceData: BalanceSheet
 }



function DashboardTab() {
  const { id } = useParams();

  // const [chartData, setChartData] = useState();
  const location = useLocation();
  console.log("Location: ",location);


  const tabObj = [
    { id: "stock-info", title: "Stock" },
    { id: "stock-chart", title: "Chart" },
    { id: "stock-quarterly-results", title: "Quarters" },
    { id: "stock-profit-loss", title: "Profit & Loss" },
    { id: "stock-balance-sheet", title: "Balance Sheet" },
  ];

  const [toggleState, changeToggleState] = useState({
    activeTabObject: tabObj[0],
    tabObjects: tabObj,
  });

  const toggleTab = (index: number) => {
    changeToggleState({
      ...toggleState,
      activeTabObject: toggleState.tabObjects[index],
    });
  };

  const toggleActiveTabStyle = (index: number) => {
    if (toggleState.tabObjects[index] === toggleState.activeTabObject) {
      return "activeTab mr-2";
    }
  };

  return (
    <>
      <div className="py-12 text-white">
        <div className="px-4 fixed w-full z-10">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 bg-gray-800 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 ">
            {toggleState.tabObjects.map((element, index) => {
              return (
                <li key={index} className={toggleActiveTabStyle(index)}>
                  <HashLink
                    to={`#${element.id}`}
                    className={`inline-block p-4 rounded-t-lg hover:text-sky-600`}
                    onClick={() => {
                      toggleTab(index);
                    }}
                  >
                    {element.title}
                  </HashLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          id="stock-info"
          className="py-10 h-screen text-white border-1 z-[-1]"
        >
          {" "}
          <StockInfo id={id as string} 
           // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
           result={location.state.result}
          />
        </div>
        <div id="stock-chart" className="h-screen text-white mt-15 z-[-1]">
          {" "}
          <Chart id={id as string} 
            chartData={location.state.chart as StockDailyData[]}
          />
        </div>
        <div
          id="stock-quarterly-results"
          className="h-screen text-white mt-15 z-[-1]"
        >
          {" "}
          <QuarterlyResult id={id as string}  quarterData = {location.state.balance as BalanceSheet[]}/>
        </div>
        <div id="stock-profit-loss" className="h-screen text-white z-[-1]">
          {" "}
          <ProfitLoss id={id as string}/>
        </div>
        <div id="stock-balance-sheet" className="h-screen text-white z-[-1]">
          {" "}
          <StockBalanceSheet id={id as string} annualData = {location.state.balance as BalanceSheet[]}/>
        </div>
      </div>
    </>
  );
}

export default DashboardTab;
