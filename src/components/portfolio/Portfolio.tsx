import CreatePortfolio from "./CreatePortfolio";

function Portfolio () {
    return (<div>
        <div className="container mx-auto items-center">
        <div className="mt-20">
            
        <h1 className="text-white text-xl py-8">Welcome User!</h1>
        </div>
        <div className="py-6 border border-gray-700 rounded-lg">
        <CreatePortfolio />
        </div>
        </div>
    </div>);
}

export default Portfolio;