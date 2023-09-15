

import DashboardTab from "./DashboardTab";
import { useParams } from "react-router-dom";


function StockDashboard() {
  const { id } = useParams();
  console.log("Id in stock dashboard: ",id);
  
  
  return (
    <>
      <div className="bg-gray-800">
        <DashboardTab
         />
      </div>
    </>
  );
}

export default StockDashboard;