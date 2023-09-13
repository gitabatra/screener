import React, { createContext, useState, ChangeEvent, MouseEvent, useEffect } from "react";
import { Portfolio } from "../../types";
import { getPortfolioFromLocalStorage } from "../../utils/localApi";


export interface Details {
  stockName: string,
  shares: number,
  price:number,
  dateOfPurchase: string
}
export interface PortfolioContextInterface {
    portfolios: Portfolio[];
    details: Details,
    addStocks : (event: MouseEvent<HTMLButtonElement>) => void,
    handleChange:(event: ChangeEvent<HTMLInputElement>) => void,
  }
   
  export const PortfolioContextDefaultValue = {
    portfolios: getPortfolioFromLocalStorage(),
    details: {
      stockName: "",
      shares: 0,
      price:0,
      dateOfPurchase: ""
    },
    addStocks : () => { },
    handleChange:() => { },
  } as PortfolioContextInterface
   
  export const PortfolioContext = createContext(PortfolioContextDefaultValue);

  interface PortfolioProviderProps  {
    children: React.ReactNode
  }

  export const PortfolioProvider = ({children}: PortfolioProviderProps) => {
    const [portfolios, setPortfolio] = useState(getPortfolioFromLocalStorage());
    const [details, setDetails] = useState({
      stockName: "",
      shares: 0,
      price:0,
      dateOfPurchase:""
    })

    const addStocks = (event: MouseEvent<HTMLButtonElement>) =>{
      event.preventDefault();
      console.log("Portfolio: ",portfolios);
      const stockId = "pf-st-20230727-" + (portfolios.length).toString();
        const portfolio: Portfolio = {
          id: stockId,
          stockName: details.stockName,
          shares: details.shares,
          price: details.price,
          dateOfPurchase: (details.dateOfPurchase)
        }
        setPortfolio([...portfolios, portfolio]);
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>){
      const {name,value} = event.target;
      console.log(name,value);
      setDetails((prevValue) =>{
        return({...prevValue,[name]: value})
      })
  }

  useEffect(()=>{
    localStorage.setItem("portfolio",JSON.stringify(portfolios));
  },[portfolios]);
    
    return (
      <PortfolioContext.Provider value={{ portfolios, details, addStocks, handleChange }}>
        {children}
      </PortfolioContext.Provider>
    );
  }

  // // eslint-disable-next-line react-refresh/only-export-components
  // export const usePortfolioContext = () => useContext(PortfolioContext);


