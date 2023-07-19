import { useState } from "react";

function CreateWatchlist(){
    const [wlName, setWLName] = useState("");

    function handleChangeWL(event){
        console.log("creating new watchlist event is executing......",event.target.value);
        setWLName(event.target.value);
    }

    function handleSaveWL(event){
        console.log("Saving the watchlist name....",wlName);
        event.preventDefault();
    }

    return (
    <div className="create-wl-wrapper">
    <div>
      <h1 className="component-heading">Create new Watchlist</h1>
    </div>
    <form className="create-watchlist">
       <h3>Name</h3>
       <input
          type="text"
          name="watchlistName"
          onChange={ handleChangeWL }
          placeholder="Watchlist name"
          className="watchlist-name-input"
          value= {wlName}
        />
        <div>
        <button className="save-wlname-btn" onClick= {handleSaveWL}>Save</button>
        </div>  
    </form>

    </div>);
}

export default CreateWatchlist;