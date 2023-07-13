function Search() {
    return (
        <div className="search">
			<form action="#">
				<input type="text"
					placeholder="Search companies"
					name="search" />
				<button className="searchBtn">
                    Search
					{/* <i class="fa fa-search"
					style="font-size: 18px;">
					</i> */}
				</button>
			</form>
		</div>
    );
}

export default Search;