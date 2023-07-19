import PopularStocks from "./PopularStocks";

function Search() {
    return (
		<div className="searchWrap">
        <div className="search">
			<form action="#">
                <h1 className="mainHeading">Stock Screener</h1>
                <h4 className="smallHeading">Screening tool for investors</h4>
				<input type="text"
					placeholder="Search for a company"
					name="search" />
				<PopularStocks />
				{/* <button className="searchBtn">
                    Search
				</button> */}
			</form>
		</div>
		</div>
    );
}

export default Search;