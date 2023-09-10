import { useState } from "react";

interface CompanyAboutInfoProp {
    description: string,
    sector: string,
    industry:string
}

function CompanyAboutInfo({description,sector,industry}:CompanyAboutInfoProp){
    const [showMore, setShowMore] = useState(false);
    return (
        <div className="px-2 py-3 order-first lg:order-last">
        <div className="pb-6">
        <h1 className="py-2 text-3xl uppercase">About</h1>
        <span className="text-zinc-400">{showMore ? description : description.substring(0,300)}</span>
        <div className="py-4">
        <a href="#" className={`text-sky-600 uppercase py-4`}  onClick={()=>{setShowMore(true)}} hidden= {showMore ? true : false}>Read More</a>
        </div>
        </div>
        <div className="flex justify-between text-md py-3 px-2 bg-gray-700 rounded mb-4">
          <span className="text-slate-500 uppercase"> Sector</span>
            <span className="text-zinc-300 text-md">{sector}</span>
        </div>
        <div className="flex justify-between text-sm py-3 px-2 bg-gray-700 rounded">
          <span className="text-slate-500 uppercase"> Industry</span>
            <span className="text-zinc-300 text-md">{industry}</span>
        </div>
      </div>
    )
}

export default CompanyAboutInfo;