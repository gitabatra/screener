import { StockResult } from "../../types";
// import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

interface resultProp {
  result: StockResult[];
}

function SearchResult({ result }: resultProp) {
  const navigate = useNavigate();

    // function handleClick(title){
    //     console.log("selected value: ",title);
    // }
  console.log("result: ", result);

    return (
      <>
        <div className="grid grid-cols-1 divide-y divide-gray-700 rounded-lg shadow w-70 dark:bg-gray-700 z-10 h-40 overflow-y-auto absolute">
          {result.map((res, index) => {
            return (
              <div className="px-2 py-1 hover:bg-gray-500" key={index} onClick={()=>{navigate(`/stock/${res.id}`)}}>
                {res.title}
              </div>
            );
          })}
        </div>
      </>
    );
  }

export default SearchResult;
