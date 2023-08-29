import { Stock } from "../../types";
import { TrashIcon } from "@heroicons/react/24/solid";

interface stockProp {
    stock: Stock,
    deleteStock: (id: string) => void;
}

function StockData({stock,deleteStock}: stockProp){
    // console.log("Stocks in managecompanies: ",stock);

    return (<>
     <div className="flex justify-between items-center pb-4 border-b-2 border-gray-600">
              <p>{stock.stockName}</p>
            <button className="w-5 h-5" onClick={()=>{deleteStock(stock.stockID)}}><TrashIcon /></button>
    </div>
    </>)
  }

  export default StockData;