import { getWatchlistDataById } from "../../utils/api";
import { useLocation, useNavigate } from "react-router-dom";

interface watchlistNavProps {
    watchlistID : string
  }

function SecondaryNavigation({watchlistID}: watchlistNavProps){
  const navigate = useNavigate();
  const watchlistData = getWatchlistDataById(watchlistID);

  const { pathname } = useLocation(); 
  const isIncluded = pathname.includes("manage-companies");

    return (<>
    
<nav className="flex py-3" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <button className="inline-flex items-center text-sm font-medium text-gray-100 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white" onClick={()=>{navigate(`/watchlist`)}}>
        Watchlists
      </button>
    </li>
    {
    !isIncluded 
    ? 
    <>
     <li aria-current="page">
    <div className="flex items-center">
      <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
      </svg>
      <span className="ml-1 text-sm font-medium text-gray-100 md:ml-2 dark:text-gray-400">{watchlistData[0].wlName}</span>
    </div>
  </li>
    </> 
    :<><li>
    <div className="flex items-center">
    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
      </svg>
      <button className="ml-1 text-sm font-medium text-gray-100 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white" onClick={()=>{navigate(`/watchlist/${watchlistID}`)}}>{watchlistData[0].wlName}</button>
    </div>
  </li>
  <li aria-current="page">
    <div className="flex items-center">
      <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
      </svg>
      <span className="ml-1 text-sm font-medium text-gray-100 md:ml-2 dark:text-gray-400">Manage Companies</span>
    </div>
  </li></>
    }
    
  </ol>
</nav>
</>);
}

export default SecondaryNavigation;