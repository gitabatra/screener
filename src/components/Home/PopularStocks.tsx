function PopularStocks () {
    const populatStockLinks = [
        {name:"Air canada", link:"/"},
        {name:"BMO", link:"/"},
    ]
    return (
        <>
        <div className="flex pt-10 items-center">
            <span className="text-white">Popular Stocks : </span>
            {
                populatStockLinks.map((stocks,index) =>(
                    <a href={stocks.link} key= {index} className="btn border border-sky-600 hover:bg-sky-800 text-white px-8 py-4 ml-4">{stocks.name}</a>
                ))
            }
        </div>
        </>
    );
}

export default PopularStocks;