// import Datepicker from "react-tailwindcss-datepicker";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import StockDetails from "./StockDetails";
import InitialPick from "./InitialPick";

function CreatePortfolio(){
    return(<>
     <div className="items-center justify-center py-10">
            <form className="text-left">
            <div className="flex items-center justify-left px-5 py-4">
              <p className="text-md mr-5">Portfolio Name </p>
              <div className="w-80">
              <input
                type="text"
                id="portfolio-name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full pl-4 p-2.5  
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-sky-500"
                placeholder="Portfolio name"
                required
              />
              </div>
              
              <div className="w-8 h-8 ml-3">
                <PencilSquareIcon />
              </div>
            </div>
            <StockDetails />
            <InitialPick />
            <div className="py-5">
              <button className="btn bg-sky-600 text-xl px-5 py-3 rounded hover:bg-sky-800 ml-3">Create</button>
            </div>
            </form>
            </div>

    </>)
}

export default CreatePortfolio;