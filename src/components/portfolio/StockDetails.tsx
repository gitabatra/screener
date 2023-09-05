import { useState } from "react";
const inputStyle = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  
dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`

function StockDetails() {
  const [details, setDetails] = useState({
    stockName: "",
    shares: 0,
    price:0,
    date:""
  })
  return (
    <>
      {/* <div className="flex items-stretch items-center px-2 py-4">
        <div className="px-2 py-2">
          <input
            type="search"
            id="simple-search"
            className={inputStyle}
            placeholder="Add Stocks"
            required
          />
        </div>

        <div className="px-2 py-2">
          <input
            type="number"
            id="stock-shares"
            className={inputStyle}
            placeholder="Number of Shares"
            required
          />
        </div>
        <div className="px-2 py-2">
          <input
            type="number"
            id="price-shares"
            className={inputStyle}
            placeholder="Price per Share"
            required
          />
        </div>
        <div className="px-2 py-2">
          <input
            type="date"
            id="date-of-purchase"
            className={inputStyle}
            placeholder="Date of purchase"
            required
          />
        </div>
      </div> */}
    </>
  );
}

export default StockDetails;
