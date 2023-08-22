
import PopularStocks from "./PopularStocks";
import SearchBar from "./SearchBar";
import {Company} from "../../types";

function HomeSearch() {
  const stockTicker = [
    {symbol: 'IBM',name: 'International Business Machines'},
    {symbol: 'BA',name: 'The Boeing Company',},
    {symbol: 'BABA',name: 'Alibaba Group Holding Ltd'},
    {symbol: 'BAC',name: 'Bank of America Corp'},
    {symbol: 'SAIC',name: 'Science Applications International Corp (SAIC)'}
    ]
  return (
    <>
      <div className="searchWrap w-full text-white flex items-center" style={{height: "100vh"}}>
      {/* <div className="container mx-auto mt-20 align-middle"> */}
      <div className="container mx-auto items-center justify-center">
        <div className="mx-auto flex-inline items-center justify-center max-w-3xl">
          <div className="my-auto">
            <h1 className="uppercase text-5xl text-white text-center py-6">
              Stock Screener
            </h1>
            <h4 className="smallHeading text-center py-4">
              Screening tool for investors
            </h4>
          </div>
         <SearchBar placeholder="Search for a company..." data={stockTicker as Company[]}/>
         <PopularStocks />
        </div>
      </div>
      </div>
    </>
  );
}

export default HomeSearch;
