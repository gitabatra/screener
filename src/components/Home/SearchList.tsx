import { Company } from "../../types";
import { useNavigate } from "react-router-dom";

interface SearchProp {
    filteredList : Company[],
    setInput: (value: string) => void
}

function SearchList({filteredList, setInput}: SearchProp){
    console.log("Filtered list: ",filteredList);
    const navigate = useNavigate();
    return(<>
     {filteredList.length !== 0 &&  <div className="grid grid-cols-1 divide-y divide-gray-700 rounded-lg shadow w-70 dark:bg-gray-700 z-10 h-40 overflow-y-auto absolute">
     
     {
       filteredList.map((value,index) =>{
         return (<div key={index}>
             <div className="px-2 py-1 hover:bg-gray-500" key={index} onClick={() => {
                 console.log("selected stock: ",value?.symbol)
                 setInput(value?.symbol);
                 navigate(`/stock/${value?.symbol}`);
        } }>
          {value?.name}
        </div>
     
         </div>) 
       })
    }
    </div>
    }
    
    </>)
}

export default SearchList