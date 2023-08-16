import StockBalanceSheet from "./StockBalanceSheet";
import ProfitLoss from "./ProfitLoss";
import QuarterlyResult from "./QuarterlyResult";
import StockInfo from "./StockInfo";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useParams } from "react-router-dom";
import {
  BalanceSheet,
  StockData,
  StockDailyData,
  IncomeSheet,
} from "../../types";
import StockChart from "./StockChart";

// interface locationProp {
//   result: StockData[];
//   chart: StockDailyData[];
//   balance: BalanceSheet[];
//   income: IncomeSheet[];
// }

function DashboardTab() {
  const { id } = useParams();
  const [result, setResult] = useState<StockData[]>([]);
  const [chartData, setChartData] = useState<StockDailyData[]>([]);
  const [balanceSheetData, setBalanceSheetData] = useState<BalanceSheet[]>([]);
  const [income, setIncomeData] = useState<IncomeSheet[]>([]);

  console.log(`ID: ${id!}`)

  const fetchData = (value: string) => {
    console.log("fetch data for overview info is executing.....", value);
    void fetch("../../../data/companyOverview.json")
      .then((response) => response.json())
      .then((json) => {
        const result = (json as StockData[]).filter((stock) => {
          return stock?.Symbol === value;
        });
        console.log("Result", result);
        setResult(result);
      });
  };

  const fetchChartData = (value: string) => {
    console.log("fetch data for chart info is executing.....", value);
    void fetch("../../../data/companyDailySeriesData.json")
      .then((response) => response.json())
      .then((json) => {
        const result = (json as StockDailyData[]).filter((stock) => {
          return stock?.["Meta Data"]?.["2. Symbol"] === value;
        });
        console.log("chartdata", result);
        setChartData(result);
      });
  };

  const fetchBalanceSheetData = (value: string) => {
    console.log("fetch data for balance sheet info is executing.....", value);
    void fetch("../../../data/companyBalanceSheet.json")
      .then((response) => response.json())
      .then((json) => {
        const bsData = (json as BalanceSheet[]).filter((stock) => {
          // console.log("BS data: ",stock);
          return stock?.symbol === value;
        });
        console.log("----BS", bsData);
        setBalanceSheetData(bsData);
      });
  };

  const fetchIncomeSheetData = (value: string) => {
    console.log("fetch data for balance sheet info is executing.....", value);
    void fetch("../../../data/companyIncomeData.json")
      .then((response) => response.json())
      .then((json) => {
        const incomeData = (json as IncomeSheet[]).filter((stock) => {
          // console.log("BS data: ",stock);
          return stock?.symbol === value;
        });
        console.log("----Income statement", incomeData);
        setIncomeData(incomeData);
      });
  };

  useEffect(() => {
    if (id) {
      console.log(`Starting data fetching for symbol: ${id}`)
      fetchData(id);
      fetchChartData(id);
      fetchBalanceSheetData(id);
      fetchIncomeSheetData(id);
    }
  }, []);

  // // const [chartData, setChartData] = useState();
  // const location = useLocation();
  // console.log("Location: ", location);

  // // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  // const state: locationProp = location.state;

  // console.log("Location: ", state);

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
        <div className="fixed w-full z-10">
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
        <div id="stock-info" className="py-10 text-white border-1 z-[-1]">
          {" "}
          <StockInfo id={id as string} result={result} />
        </div>
        <div id="stock-chart" className="text-white mt-15 z-[-2]">
          {" "}
          <StockChart id={id as string} chartData={chartData} />
        </div>
        <div id="stock-quarterly-results" className="text-white mt-15 z-[-1]">
          {" "}
          <QuarterlyResult id={id as string} quarterData={income} />
        </div>
        <div id="stock-profit-loss" className="text-white z-[-1]">
          {" "}
          <ProfitLoss id={id as string} annualIncomeData={income} />
        </div>
        <div id="stock-balance-sheet" className="text-white z-[-1]">
          {" "}
          <StockBalanceSheet id={id as string} annualData={balanceSheetData} />
        </div>
      </div>
    </>
  );
}

export default DashboardTab;
