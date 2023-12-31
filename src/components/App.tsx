
import Watchlist from "./watchlist/Watchlists";
import WatchlistView from "./watchlist/WatchlistView"
import Portfolio from "./portfolio/Portfolio";
import { Routes } from "../types";
import ManageCompanies from "./watchlist/ManageCompanies";
import RootLayout from "./RootLayout";
import StockDashboard from "./stock/StockDashboard";


import Home from "./Home/Home";
import NotFound from "./NotFound";


import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

import { WatchlistContextProvider } from "./Context/WatchlistContext";
import { PortfolioProvider } from "./Context/PortfolioContext";
import PortfolioDashboard from "./portfolio/PortfolioDashboard";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
  <Route index element={<Home />}/>
  <Route path= {Routes.WATCHLIST} element={ <Watchlist />} />   
  <Route path= {Routes.WATCHLIST_VIEW} element={ <WatchlistView />} /> 
  <Route path= {Routes.MANAGE_COMPANIES} element={ <ManageCompanies />} />
  <Route path= {Routes.PORTFOLIO} element={ <Portfolio />} />
  <Route path= {Routes.PORTFOLIO_DASHBOARD} element={ <PortfolioDashboard />} />
  <Route path= {Routes.STOCK} element={ <StockDashboard />} />
  <Route path= {Routes.NOT_FOUND} element={<NotFound />} />
  </Route>
));

function App() {
  return (
    <>
    <WatchlistContextProvider>
      <PortfolioProvider>
        <RouterProvider router={router} />
     </PortfolioProvider>
    </WatchlistContextProvider>
    </>
  )
}

export default App
