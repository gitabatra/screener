import React, { createContext, useState, ChangeEvent, useEffect } from "react";
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
    addStocks : (name: string) => void,
    deleteStock: (stock:string) => void,
    handleResetPortfolio:() => void,
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
    deleteStock:() =>{},
    handleResetPortfolio:() => {},
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

    // const addStocks = (event: MouseEvent<HTMLButtonElement>) =>{
    const addStocks = (name: string) =>{
      //event.preventDefault();
      let isAlreadyAdded: any;
      console.log("Portfolio: ",portfolios);
      const stockId = "pf-st-20230727-" + (portfolios.length).toString();
        const portfolio: Portfolio = {
          id: stockId,
          stockName: name,
          shares: details.shares,
          price: details.price,
          dateOfPurchase: (details.dateOfPurchase)
        }
        if(portfolios.length>0){
          isAlreadyAdded = portfolios.find(x => x.stockName === name);
          console.log("IF STOCK ALREADY ADDED: ",isAlreadyAdded);
         
        }
        (isAlreadyAdded) ? " " : setPortfolio([...portfolios, portfolio]);
        // setPortfolio([...portfolios, portfolio]);
        setDetails({
          stockName: "",
          shares: 0,
          price:0,
          dateOfPurchase:""
        })
    }

    const deleteStock = (stock:string)=> {
      console.log("Delete function is executing....",stock);
      const filteredPortfolio: Portfolio[] = portfolios.filter((element)=>{
         return (element.stockName!= stock)
      })
      console.log("Delete function is executing....",filteredPortfolio);
      setPortfolio(filteredPortfolio);
   }

   function handleResetPortfolio(){
    console.log("Reset PORTFOLIO");
    setPortfolio([]);
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
      <PortfolioContext.Provider value={{ portfolios, details, addStocks, deleteStock, handleResetPortfolio,handleChange }}>
        {children}
      </PortfolioContext.Provider>
    );
  }


