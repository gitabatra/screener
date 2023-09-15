import { AnnualIncomeReport } from "../../types/Income"
import { formatNumber } from "../../utils/localApi"

interface PLTableRowProp{
    label : string
    annualReportData : AnnualIncomeReport[]
    resKey: keyof AnnualIncomeReport
}

function IncomeTableRow({label, annualReportData, resKey}: PLTableRowProp){
    return(
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {label}
        </th>
        {annualReportData.map((res,index)=>{
            let objValue: any = "";
            objValue = res[resKey]
            return(
              <td key={index} className="px-6 py-4">
              {formatNumber(objValue as number)}
              </td>
    )})}
    </tr>
    )
}

export default IncomeTableRow