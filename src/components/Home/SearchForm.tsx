import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
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
          <input
            type="search"
            id="simple-search"
            className="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full pl-4 p-2.5  
                     dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
            placeholder="Search for a company..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            required
          />
        </div>
        <div className="w-10 h-10 ml-3">
          <MagnifyingGlassCircleIcon />
        </div>
      </form>
        </>
    );
}

export default SearchForm;