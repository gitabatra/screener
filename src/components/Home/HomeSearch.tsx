import { useState } from "react";
import PopularStocks from "./PopularStocks";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";
import { StockResult } from "../../types";

function HomeSearch() {
  const[result, setResult] = useState<StockResult[]>([]);
  console.log("Result in home: ",result);
  return (
    <>
      <div className="searchWrap w-full h-screen text-white flex items-center">
      {/* <div className="container mx-auto mt-20 align-middle"> */}
      <div className="container mx-auto items-center">
        <div className="flex-inline items-center justify-center">
          <div className="my-auto">
            <h1 className="uppercase text-5xl text-white text-center py-6">
              Stock Screener
            </h1>
            <h4 className="smallHeading text-center py-4">
              Screening tool for investors
            </h4>
          </div>
         <SearchForm setResult={setResult}/>
         <SearchResult result={result as unknown as StockResult[]}/>
         <PopularStocks />
        </div>
      </div>
      </div>
    </>
  );
}

export default HomeSearch;
