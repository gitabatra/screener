import { StockResult } from "../../types";

interface resultProp {
  result: StockResult[];
}

function SearchResult({ result }: resultProp) {
  console.log("result: ", result);
  if (result === undefined) {
    console.log("UNDEFINED");
    return [];
  } else {
    console.log("value present");
    return (
      <>
        <div className="grid grid-cols-1 divide-y divide-gray-700 rounded-lg shadow w-70 dark:bg-gray-700 z-10 h-40 overflow-y-auto absolute">
          {result.map((res, index) => {
            return (
              <div className="px-2 py-1 hover:bg-gray-500" key={index}>
                {res.title}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default SearchResult;
