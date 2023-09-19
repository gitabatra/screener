import { useNavigate } from "react-router-dom";
import { Company } from "../../types";
import { stockTicker } from "../../utils/api";
import { PortfolioContext } from "../Context/PortfolioContext";
import Search from "../Home/Search";
import InitialPick from "./InitialPick";
import { useContext, useState } from "react";



const inputStyle = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  
dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`

function CreatePortfolio(){
  const navigate = useNavigate();
  const { portfolios,handleChange, addStocks} = useContext(PortfolioContext);
  const [filteredList, setFilteredList] = useState<Company[]>([]);
  const [selectedPFStock,setSelectedPFStock] = useState("");

    return(<>
    
     <div className="items-center justify-center py-10">
            <form className="text-left">
            {/* <div className="flex items-center justify-left px-5 py-4">
              <h4 className="text-lg mr-5">Portfolio Name </h4>
              <div className="w-80">
              <input
                type="text"
                id="portfolio-name"
                name="portfolioName"
                className={inputStyle}
                onChange={handleChange}
                placeholder="Portfolio name"
                //value= {details.portfolioName}
                required
              />
              </div>
              
              <div className="w-8 h-8 ml-3">
                <PencilSquareIcon />
              </div>
            </div> */}
            {/* <StockDetails /> */}
            <div className="flex-inline items-center justify-center px-2 py-4">
            <h4 className="text-white text-xl px-2 pb-2">Add Stocks</h4>
        <div className="px-2 py-2">
           <Search
              placeholder="Add Stocks..."
              data={stockTicker as Company[]}
              value={selectedPFStock}
              setFilteredList={setFilteredList}
            />
             {filteredList.length !== 0 && (
                    <div className="grid grid-cols-1 divide-y divide-gray-700 rounded-lg shadow w-70 dark:bg-gray-700 z-10 h-40 overflow-y-auto absolute">
                      {filteredList.map((value, index) => {
                        return (
                          <div key={index}>
                            <div
                              className="px-2 py-1 hover:bg-gray-500"
                              key={index}
                              onClick={() => {
                                setSelectedPFStock(value?.symbol);
                                setFilteredList([]);
                              }}
                            >
                              {value?.name}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
          {/* <input
            type="search"
            id="simple-search"
            name="stockName"
            className={inputStyle}
            onChange={handleChange}
            placeholder="Add Stocks"
            //value= {details.stockName}
            required
          /> */}
        </div>
      
        <div className="flex items-stretch items-center py-4">
        <div className="px-2 py-2">
          <input
            type="number"
            id="stock-shares"
            name="shares"
            className={inputStyle}
            onChange={handleChange}
            placeholder="Number of Shares"
            //value= {details.shares}
            required
          />
        </div>
        <div className="px-2 py-2">
          <input
            type="number"
            id="price-shares"
            name="price"
            className={inputStyle}
            onChange={handleChange}
            placeholder="Price per Share"
            //value= {details.price}
            required
          />
        </div>
        <div className="px-2 py-2">
          <input
            type="date"
            id="date-of-purchase"
            name="dateOfPurchase"
            className={inputStyle}
            onChange={handleChange}
            placeholder="Date of purchase"
            //value= {details.dateOfPurchase}
            required
          />
        </div>
        </div>
      </div>
      <div className="py-2 px-2">
        <button className="btn bg-sky-600 text-xl px-5 py-3 rounded hover:bg-sky-800 ml-3" 
            onClick={()=>{addStocks(selectedPFStock)}}
        >Save</button>
      </div>
     
      <InitialPick portfolios={portfolios}/>
     
            <div className="float-right pr-4 pb-4">
              <button className="btn bg-sky-600 text-xl px-5 py-3 rounded hover:bg-sky-800 ml-3" 
              onClick={()=>{navigate(`/portfolio/user`)}}
              >Create Portfolio</button>
            </div>
            </form>
            </div>
       
    </>)
}

export default CreatePortfolio;