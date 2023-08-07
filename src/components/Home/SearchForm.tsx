// import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { StockResult } from "../../types";

interface searchProp{
  setResult: (result: StockResult[]) => void
}

function SearchForm({setResult}: searchProp) {
  const [input, setInput]=useState("");

  const fetchData=(value: string)=> {
    void fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json)=>{
      console.log(json);
      // const result: Result[] = json.filter((post: { title: string; })=> {
      //   return (value && post && post.title && post.title.toLowerCase().includes(value));
      // });

      const result = (json as StockResult[]).filter(post => {
        return post?.title?.toLowerCase().includes(value)
      })

      console.log("Result",result);
      setResult(result);
    });
  }
  
  const handleChange=(value: string)=> {
    console.log("---Selected value from list is: ",value);
    setInput(value);
    fetchData(value);
  }
    return (
        <>
         <form className="flex items-center justify-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
          <input
            type="search"
            id="simple-search"
            className="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 p-3.5  
                     dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
            placeholder="Search for a company..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            required
          />
        </div>
        {/* <div className="w-10 h-10 ml-3">
          <MagnifyingGlassCircleIcon />
        </div> */}
      </form>
        </>
    );
}

export default SearchForm;