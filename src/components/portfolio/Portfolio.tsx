import CreatePortfolio from "./CreatePortfolio";

function Portfolio () {
    return (<div>
        <div className="container mx-auto items-center">
        <div className="mt-20">
        <h1 className="text-white text-xl py-8 px-2">Welcome User!</h1>
        </div>
        <CreatePortfolio />
        </div>
    </div>);
}

export default Portfolio;