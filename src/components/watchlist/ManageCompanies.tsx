// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function ManageCompanies() {
  // const navigate = useNavigate();
  const { id } = useParams();

  
  console.log("********** Watchlist Id: ",id);

  return (
    <>
      <div className="container mx-auto py-10">
        <div className="py-10 px-5">
          <h1>Add Companies to Core Watchliat</h1>
        </div>
        <div className="items-center justify-center py-10">
          <form className="text-left">
            <div className="flex items-center justify-left px-5 py-4">
              <p className="text-md mr-5">Company Name </p>
              <div className="w-80 relative inline-flex items-center">
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
                <input type="search" placeholder="eg. BMO" className="bg-gray-40 dark:bg-gray-600 border-b-2 w-full border-gray-800 p-2.5 pl-10 text-gray-100" required/>

                {/* <input
                  type="text"
                  id="voice-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  
                             dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="eg. BMO"
                  required
                /> */}
              </div>
            </div>
            <div className="py-5">
              <button className="btn bg-sky-600 text-xl px-5 py-3 rounded hover:bg-sky-800 ml-3">
                Done
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ManageCompanies;
