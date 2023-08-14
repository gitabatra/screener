

import DashboardTab from "./DashboardTab";
import { useParams } from "react-router-dom";


function StockDashboard() {
  const { id } = useParams();
  console.log("Id in stock dashboard: ",id);
  
  return (
    <>
      <div className="px-4 bg-gray-800">
        <DashboardTab
        //  result={result}
         />
      </div>
    </>
  );
}

export default StockDashboard;




// export const chartDetailsLoader =async () => {
//   const res = await fetch("../../../data/IBMdailyData.json");
//   return res.json()
// }

// export const balanceSheetLoader =async () => {
//   const res = await fetch("../../../data/balanceSheet.json");
//   return res.json()
// }