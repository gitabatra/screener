
import Watchlist from "./watchlist/Watchlists";
import WatchlistView from "./watchlist/WatchlistView"
import Portfolio from "./portfolio/Portfolio";
import { Routes } from "../types";
import HomeSearch from "./Home/HomeSearch";
import ManageCompanies from "./watchlist/ManageCompanies";
import RootLayout from "./RootLayout";


import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
  <Route index element={<HomeSearch />} />
  <Route path= {Routes.WATCHLIST} element={ <Watchlist />} />   
  <Route path= {Routes.WATCHLIST_VIEW} element={ <WatchlistView />} /> 
  <Route path= {Routes.MANAGE_COMPANIES} element={ <ManageCompanies />} />
  <Route path= {Routes.PORTFOLIO} element={ <Portfolio />} />
  </Route>
));

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
