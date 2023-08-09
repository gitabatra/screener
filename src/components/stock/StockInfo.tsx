function StockInfo(){
    return(<>
    <div id="stock-info" className="px-4 min-h-screen">
        <div className="mt-20 pt-10"></div>
        <div className="flex justify-end pl-6">
        <button className="btn rounded font-medium text-2xl text-white bg-sky-700 px-6 py-4 hover:bg-sky-800">
              <span className="mr-2">Add to watchlist</span>
        </button>
        </div>
        <h1 className="px-2 py-3 text-xl">Company Name - </h1>
        <p className="px-2 pb-7">Current Price - </p>
        <div className="border-2 border-gray-600 rounded-lg py-6 px-2">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
    <div>
      <p>Market Cap - </p>
    </div>
    <div>
    <p>Current Price - </p>
    </div>
    <div>
    <p>High / Low - </p>
    </div>
    <div>
    <p>Stock P/E - </p>
    </div>
    <div>
    <p>Book Value - </p>
    </div>
    <div>
    <p>Dividend Yield - </p>
    </div>
    <div>
    <p>ROCE - </p>
    </div>
    <div>
    <p>ROE - </p>
    </div>
    <div>
    <p>Face Value - </p>
    </div>
    <div>
    <p>EPS - </p>
    </div>
    <div>
    <p>Debt to Equity - </p>
    </div>
</div>
    </div>
    </div>
    </>);
}

export default StockInfo;