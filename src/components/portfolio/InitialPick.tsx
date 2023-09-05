import { Portfolio } from "../../types/Portfolio";

interface PortfolioProp{
  portfolios: Portfolio[]
}
function InitialPick({portfolios}: PortfolioProp) {
  console.log("Portfolio in INITIAL---",portfolios)
  return (
    <>
      <div className="px-2 py-3">
        <button
          type="button"
          className="text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium 
     rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Reset All
        </button>

{
  portfolios.map((stock:Portfolio,index:number) =>{
    console.log("STOCK",stock);
    return ( <a key={index}
      href="#"
      className="inline-flex items-center justify-center text-gray-950 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 
         font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 
         dark:focus:ring-gray-700"
    >
      <span>{stock?.stockName}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 ml-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </a>)
  })
}
      </div>
    </>
  );
}

export default InitialPick;