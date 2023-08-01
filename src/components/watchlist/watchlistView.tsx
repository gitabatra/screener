// import { loader } from ".";
import SecondaryNavigation from "./SecondaryNavigation";
import { useParams, useNavigate } from "react-router-dom";
import { getWatchlistDataById, getStocksDataFromWatchlist } from "../../utils/api";


function WatclistTableHeader({header}) {
  console.log("HeaderInfo...  :",header);
  return (
    <>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {header.map((name, index) => {
            return (
              <th scope="col" className="px-6 py-3" key={index}>
                {" "}
                {name}{" "}
              </th>
            );
          })}
        </tr>
      </thead>
    </>
  );
}

function WatchlistTableRow({stock}) {
  console.log("Stock data in Watchlist table: ",stock);
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {Object.entries(stock).map(([key,value]) => {
          return (
            <td className="px-6 py-4" key={key}>
              {value}
            </td>
          );
        })}
      </tr>
    </>
  );
}

function WatchlistView() {

  const { id } = useParams();
  const navigate = useNavigate();
  console.log("Watchlist view WL ID: ",id);
  const watchlistData = getWatchlistDataById(id);
  const watchlistHeaderInfo = Object.keys(watchlistData[0].wlData[0]);
  const stocksList =  getStocksDataFromWatchlist(id);
  console.log("Watchlistdata: ",watchlistData[0].wlName,stocksList);


  return (
    <>
      <div className="container mx-auto py-12 items-center">
      <SecondaryNavigation watchlistID={id} />
        {/* <h1 className="text-xl">Watchlist View</h1> */}
        <div className="flex items-center justify-between px-0 py-10">
          <p className="text-lg"> {watchlistData[0].wlName} </p>
          <button className="inline-flex items-center justify-center btn outline px-4 py-2 text-lg" onClick={()=>{navigate(`/watchlist/${id}/manage-companies`)}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
            <span className="uppercase">Companies</span>
          </button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <WatclistTableHeader header={watchlistHeaderInfo}/>
            <tbody>
              {
                stocksList.map((stock,index) => {return (<WatchlistTableRow key={index} stock={stock} />)})
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default WatchlistView;