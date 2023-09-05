import { createContext } from "react";
import { Portfolio } from "../../types";
import { getPortfolioFromLocalStorage } from "../../utils/localApi";

export interface PortfolioContextData {
    portfolios: Portfolio[];
  }
   
  export const PortfolioContextDefaultValue: PortfolioContextData = {
    portfolios: getPortfolioFromLocalStorage()
  }
   
  export const PortfolioContext = createContext<PortfolioContextData>(PortfolioContextDefaultValue);