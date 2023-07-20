// import CreateWatchlist from "./CreateWatchlist";


function CoreWatchlist() {
    return (<div>
        <div className="watchlist-wrapper">
            <div className="wl-btn">
                <a href="/create-watchlist" className="create-watchlist-btn">+ Create new watchlist</a>
                {/* <button className="create-watchlist-btn" 
                onClick= {()=> {
                    console.log("Create new watchlist is executing...");
                    return ( 
                    <CreateWatchlist />
                )}}
                >+ Create new watchlist</button> */}
            </div>
            <div className="watchlists">
                <p>Core Watchlist</p>
                <div className="wl-btn-group">
                   <button className="watchlist-view-btn">Watchlist view</button>
                   <button className="watchlist-view-btn">Manage Companies</button>
                </div>
            </div>
        </div>
    </div>);
}

export default CoreWatchlist;