import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
// import FunnelIcon from "@heroicons/react/24/solid";

function SearchForm() {
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