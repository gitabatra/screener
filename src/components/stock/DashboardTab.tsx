import StockBalanceSheet from "./StockBalanceSheet";
import ProfitLoss from "./ProfitLoss";
import QuarterlyResult from "./QuarterlyResult";
import StockInfo from "./StockInfo";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useParams } from "react-router-dom";

// import StockChart from "./StockChart";
 
import {getCompanyOverviewDataBySymbol, getDailyStockDataBySymbol, getCompanyIncomeDataBySymbol, getCompanyBalanceSheetDataBySymbol} from "../../utils/api";
// import StockMultiChart from "./StockMultiChart";
import StockChartTab from "./StockChartTab";


function DashboardTab() {
  const { id } = useParams();
  const result = getCompanyOverviewDataBySymbol(id as string);
  const chartData = getDailyStockDataBySymbol(id as string);
  const income = getCompanyIncomeDataBySymbol(id as string);
  const balanceSheetData = getCompanyBalanceSheetDataBySymbol(id as string);

  console.log(`ID: ${id!}`)

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

  const ready = result.length > 0 && chartData.length > 0 && balanceSheetData.length > 0 && income.length > 0
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`Data is ready?: ${ready}`)

  if (!ready) {
    return <p>Not ready</p>
  }

  return (
    <>
      <div className="py-10 text-white pb-10">
        <div className="fixed w-full">
          <ul className="px-8 flex flex-wrap text-sm font-medium text-center text-gray-500 bg-gray-800 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 ">
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
        <div id="stock-info" className="py-10 text-white border-1 z-[1]">
          {" "}
          <StockInfo id={id as string} result={result} />
        </div>
        <div id="stock-chart" className="text-white mt-15 z-[-1]">
          {" "}
          <StockChartTab id={id as string} chartData={chartData}/>
          {/* <StockChart id={id as string} chartData={chartData} /> */}
          {/* <StockMultiChart id={id as string} chartData={chartData} /> */}
        </div>
        <div id="stock-quarterly-results" className="text-white mt-15 z-[1]">
          {" "}
          <QuarterlyResult id={id as string} quarterData={income} />
        </div>
        <div id="stock-profit-loss" className="text-white z-[1]">
          {" "}
          <ProfitLoss id={id as string} annualIncomeData={income} />
        </div>
        <div id="stock-balance-sheet" className="text-white z-[1]">
          {" "}
          <StockBalanceSheet id={id as string} annualData={balanceSheetData} />
        </div>
      </div>
    </>
  );
}

export default DashboardTab;

// export const stockOverviewLoader = (value: string) => {
//   const result ={}
//   const stockInfoOutput = getCompanyOverviewDataBySymbol(value);

//   const dailyData = getDailyStockDataBySymbol(value);
//   console.log("--CHART--Daily data from aPI: ",dailyData);

//   const incomeOutput = getCompanyIncomeDataBySymbol(value);
//   console.log("--INCOME--Income Data from API by given Symbol",incomeOutput);

//   const balanceInfo = getCompanyBalanceSheetDataBySymbol(value);
//   result = {
//     stockResult: stockInfoOutput,
//     chartData: dailyData,
//     balanceSheetData: balanceInfo,
//     incomeData: incomeOutput
//   }
//   return result;
// }
