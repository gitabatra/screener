
import PopularStocks from "./PopularStocks";
//import SearchBar from "./SearchBar";
import {Company} from "../../types";
import {stockTicker} from "../../utils/api";
// import {getStocksListByKeyword} from "../../utils/api";
import { 
  //useEffect, 
  useState } from "react";
import Search from "./Search";
import SearchList from "./SearchList";
import SearchBar from "./SearchBar";

function HomeSearch() {
  const [input,setInput] = useState("");
  const [filteredList, setFilteredList] = useState<Company[]>([]);
  // const [stockTicker,setStockTicker] = useState();

  // function fetchStocks(input: string){
  //   const data = getStocksListByKeyword(input);
  //   data
  //     .then((result) => {
  //       console.log("Data: ", result);
  //       setStockTicker(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // console.log("StockTicker : ",stockTicker);

  // useEffect(() => {
  //   if(input){
  //     fetchStocks(input);
  //   }
  // }, [input]);

  return (
    <>
      <div className="searchWrap w-full text-white flex items-center" style={{height: "100vh"}}>
      {/* <div className="container mx-auto mt-20 align-middle"> */}
      <div className="container mx-auto items-center justify-center">
        <div className="mx-auto flex-inline items-center justify-center px-6 max-w-3xl">
          <div className="my-auto">
            <h1 className="uppercase text-3xl md:text-5xl text-white text-center py-6">
              Stock Screener
            </h1>
            <h4 className="smallHeading text-center py-4">
              Screening tool for investors
            </h4>
          </div>
          <Search placeholder="Search for a company..." data={stockTicker as Company[]} value={input} setFilteredList={setFilteredList}/>
          <SearchList filteredList={filteredList} setInput={setInput} />
         {/* <SearchBar placeholder="Search for a company..." data={stockTicker as Company[]} value={input} setInput={setInput}
         // setSymbol={Symbol.bind(null)}
         /> */}
         <PopularStocks />
        </div>
      </div>
      </div>
    </>
  );
}

export default HomeSearch;
