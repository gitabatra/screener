import { Link } from "react-router-dom";

function NotFound(){
    return(<>
     <div className="w-full text-white flex items-center" style={{height: "100vh"}}>
      <div className="container mx-auto items-center justify-center">
        <div className="mx-auto flex-inline items-center justify-center max-w-3xl">
          <div className="my-auto">
            <h1 className="uppercase text-5xl text-white text-center py-6">
            Page Not Found
            </h1>
            <h4 className="smallHeading text-center py-4">
            Go back to <Link to="/"><span className="hover:text-sky-600 underline"><b>HomePage</b></span></Link>
            </h4>
          </div>
        </div>
      </div>
      </div>
   </>);
}

export default NotFound