import StockBalanceSheet from "./StockBalanceSheet";
import ProfitLoss from "./ProfitLoss";
import QuarterlyResult from "./QuarterlyResult";
import StockInfo from "./StockInfo";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useParams } from "react-router-dom";

// import StockChart from "./StockChart";

import {
  getCompanyOverviewDataBySymbol,
  getDailyStockDataBySymbol,
  getCompanyIncomeDataBySymbol,
  getCompanyBalanceSheetDataBySymbol,
  getCompanyOverviewDataBySymbol1,
} from "../../utils/api";
// import StockMultiChart from "./StockMultiChart";
import StockChartTab from "./StockChartTab";
import { BalanceSheet, CompanyOverviewData, IncomeSheet } from "../../types";


function DashboardTab() {
  const { id } = useParams();
  // const [result, setResult] = useState<CompanyOverviewData>();

  const result = getCompanyOverviewDataBySymbol1(id as string);
  console.log("Data in stock dashboard: ", result);
  const chartData = getDailyStockDataBySymbol(id as string);
  const income = getCompanyIncomeDataBySymbol(id as string);
  const balanceSheetData = getCompanyBalanceSheetDataBySymbol(id as string);

  console.log(`ID: ${id!}`);

  const tabObj = [
    { id: "stock-info", title: "Stock" },
    { id: "stock-chart-tab", title: "Chart" },
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

  // useEffect(() => {
  //   const data = getCompanyOverviewDataBySymbol(id as string);
  //   data
  //     .then((result) => {
  //       console.log("Data: ", result);
  //       setResult(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   console.log("Result in useEffect: ", result);
  // }, [id, result]);

  // useEffect(() => {
  //   if (id) {
  //     console.log(`Starting data fetching for symbol: ${id}`)
  //     void fetchCompnayData(id);
  //     // fetchChartData(id);
  //     // fetchBalanceSheetData(id);
  //     // fetchIncomeSheetData(id);
  //   }
  // }, [id]);


  const ready =
    // result.length > 0 &&
    // result &&
    chartData.length > 0 
    // balanceSheetData.length > 0 
    // income.length > 0;
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`Data is ready?: ${ready}`);

  // const ready =
  //   // result.length > 0 &&
  //   // result &&
  //   chartData.length > 0 &&
  //   balanceSheetData.length > 0 &&
  //   income.length > 0;
  // // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  // console.log(`Data is ready?: ${ready}`);

  if (!ready) {
    return <p>Not ready</p>;
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
        <div
          id="stock-info"
          className="py-10 text-white border-1 z-[1] shadow-inner"
        >
          {" "}
          {/* <StockInfo id={id as string} result={result ? [result] : []} /> */}
          <StockInfo id={id as string} result={result as unknown as CompanyOverviewData} />
        </div>
        <div id="stock-chart-tab" className="text-white mt-2 z-[-1]">
          {" "}
          <StockChartTab id={id as string} chartData={chartData} />
        </div>
        <div id="stock-quarterly-results" className="text-white mt-15 z-[1]">
          {" "}
          <QuarterlyResult id={id as string} quarterData={income as IncomeSheet} />
        </div>
        <div id="stock-profit-loss" className="text-white z-[1]">
          {" "}
          {/* <Test id={id as string} annualIncomeData={income} /> */}
          <ProfitLoss id={id as string} annualIncomeData={income as IncomeSheet} />
        </div>
        <div id="stock-balance-sheet" className="text-white z-[1]">
          {" "}
          <StockBalanceSheet id={id as string} annualData={balanceSheetData as BalanceSheet} />
        </div>
      </div>
    </>
  );
}

export default DashboardTab;
