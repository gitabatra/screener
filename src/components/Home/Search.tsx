import { useState } from "react";
import { StockData, IncomeSheet,
  //  Ticker,BestMatch,  Company, BestMatch
  StockDailyData, BalanceSheet
} from "../../types";
import StockList from "./StockList"
// import { Link } from "react-router-dom";


function Search() {
  // const [ticker,setTickerData] = useState<BestMatch[]>([]);
  const[result, setResult] = useState<StockData[]>([]);
  const [chartData, setChartData] = useState<StockDailyData[]>([]);
  const [balanceSheetData, setBalanceSheetData] = useState<BalanceSheet[]>([]);
  const [income,setIncomeData] = useState<IncomeSheet[]>([]);

  const [input, setInput]=useState("");


  

  // const fetchTicker=(value: string)=> {
  //   const apiKey = 'EGAI68J68Y9G55QE'
  //   const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=${apiKey}`
  //   void fetch(url).then((response) => 
  //   response.json())
  //   .then((json) =>{
  //     console.log("Tick: ",json);
  //     const result = (json.bestMatches as BestMatch[]).filter(stock =>{
  //       console.log("Ticket result: ",stock);
  //       return (stock?.["1. symbol"].includes(value) && stock?.["3. type"]==="Equity")
  //     })
  //     console.log("Stock search result: ", result);
  //     setTickerData(result);
  //   });
  // }

  const fetchData=(value: string)=> {
    console.log("fetch data for overview info is executing.....");
    void fetch("../../../data/companyOverview.json")
    .then((response) => response.json())
    .then((json)=>{
      const result = (json as StockData[]).filter(stock => {
        return stock?.Symbol.includes(value)
      })
      console.log("Result",result);
       setResult(result);
    });
  }

  const fetchChartData=(value: string)=> {
    console.log("fetch data for chart info is executing.....");
    void fetch("../../../data/companyDailySeriesData.json")
    .then((response) => response.json())
    .then((json)=>{
      const result = (json as StockDailyData[]).filter(stock => {
        return stock?.["Meta Data"]?.["2. Symbol"]?.includes(value)
      })
      console.log("chartdata",result);
      setChartData(result);
    });
  }

  const fetchBalanceSheetData=(value: string)=> {
    console.log("fetch data for balance sheet info is executing.....");
    void fetch("../../../data/companyBalanceSheet.json")
    .then((response) => response.json())
    .then((json)=>{
      const bsData = (json as BalanceSheet[]).filter(stock => {
        console.log("BS data: ",stock);
        return stock?.symbol?.includes(value)
      })
      console.log("----BS",bsData);
      setBalanceSheetData(bsData);
    });
  }

  const fetchIncomeSheetData=(value: string)=> {
    console.log("fetch data for balance sheet info is executing.....");
    void fetch("../../../data/companyIncomeData.json")
    .then((response) => response.json())
    .then((json)=>{
      const incomeData = (json as IncomeSheet[]).filter(stock => {
        console.log("BS data: ",stock);
        return stock?.symbol?.includes(value)
      })
      console.log("----Income statement",incomeData);
      setIncomeData(incomeData);
    });
  }


  
  const handleChange=(value: string)=> {
    console.log("Chnage list items event is executing :",value)
    // fetchTicker(value);
    fetchData(value);
    fetchChartData(value);
    fetchBalanceSheetData(value);
    fetchIncomeSheetData(value);
  }
    return (
        <>
         <form className="flex items-center justify-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
          <input
            type="search"
            id="simple-search"
            className="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 p-3.5  
                     bg-gray-600 border-gray-600 dark:placeholder-gray-400 text-white"
            placeholder="Search for a company..."
            onChange={(e) => handleChange(e.target.value)}
            value={input}
            autoComplete="off"
            required
          />
        </div>
      </form>
    
      <StockList setInput={setInput} result={result} chartData={chartData} balanceSheetData={balanceSheetData} income={income}/>

          {/* <div className="grid grid-cols-1 divide-y divide-gray-700 rounded-lg shadow w-70 dark:bg-gray-700 z-10 h-40 overflow-y-auto absolute">
           {(ticker ).map((res, index: number) => {
             console.log("symbol: ", res);
             return (
              <div key={res?.["1. symbol"]} >
              <Link to={`/stock/${res?.["1. symbol"]}`} state={{result:result,chart:chartData,balance:balanceSheetData}}>
               <div className="px-2 py-1 hover:bg-gray-500" key={index} onClick={() => {
                 setInput(res?.["1. symbol"]);
                  // , { state: { result: res} }
               } }>
                 {res?.["2. name"]}
               </div>
               </Link>
               </div>
             );
              
           })}
         </div> */}
        </>
    );
}

export default Search;





