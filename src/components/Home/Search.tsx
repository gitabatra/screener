import { ChangeEvent} from "react";
import { Company } from "../../types";


// import { StockData, IncomeSheet,
//     //  Ticker,BestMatch,  Company, BestMatch
//     StockDailyData, BalanceSheet
//   } from "../../types";

interface searchProps 
{
    placeholder: string,
    data: Company[],
    value: string,
    setFilteredList: (filterdList: Company[]) => void
}

function Search({placeholder, data, value, setFilteredList}: searchProps){
  
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



    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
        const seachWord =  event.target.value;
        const newFilter = data.filter((value) =>{
            return value?.name.toLowerCase()?.includes(seachWord.toLowerCase());
        })
        if(seachWord === ""){
            setFilteredList([]);
        }else{
            setFilteredList(newFilter);
        }
        
    }
        return(<>
     <div className="flex items-center justify-center">
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
            type="text"
            id="simple-search"
            className="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 p-3.5  
                     bg-gray-600 border-gray-600 dark:placeholder-gray-400 text-white"
            placeholder={placeholder}
            value= {value}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        </div>
        
        
       

         {/* <div className="grid grid-cols-1 divide-y divide-gray-700 rounded-lg shadow w-70 dark:bg-gray-700 z-10 h-40 overflow-y-auto absolute">
           {(ticker ).map((res, index: number) => {
             console.log("symbol: ", res);
             return (
              <div key={res?.["1. symbol"]} >
              <Link to={`/stock/${res?.["1. symbol"]}`} state={{result:result,chart:chartData,balance:balanceSheetData}}>
               <div className="px-2 py-1 hover:bg-gray-500" key={index} onClick={() => {
                 setInput(res?.["1. symbol"]);
               } }>
                 {res?.["2. name"]}
               </div>
               </Link>
               </div>
             );
              
           })}
         </div> */}
    </>)
}

export default Search;