import { AnnualReport, BalanceSheet } from "../../types";
import { formatNumber } from "../../utils/localApi";
interface BSTableRowProp {
  label: string;
  annualReportData: AnnualReport[];
  resKey: keyof AnnualReport;
}

function BalanceSheetTableRow({
  label,
  annualReportData,
  resKey,
}: BSTableRowProp) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {label}
      </th>
      {annualReportData.map((res, index) => {
        let objValue: any = "";
        objValue = res[resKey]
        return (
          <td key={index} className="px-6 py-4">
            {formatNumber(objValue as number )}
          </td>
        );
      })}
    </tr>
  );
}

interface stockProp {
  id: string;
  annualData: BalanceSheet;
}

function StockBalanceSheet({ id, annualData }: stockProp) {
  console.log("Stock Balance sheet", id);
  const annualReport = annualData?.annualReports;
  const annualReportData = [...annualReport].reverse();
  // console.log("Annual report data: ",annualReportData);
  return (
    <>
      <div className="py-10 px-10 text-white pb-14">
        <div className="mt-14 pt-12"></div>
        <h1 className="text-2xl">Balance Sheet</h1>

        <div className="overflow-x-auto shadow-md sm:rounded-lg pt-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3"></th>
                {annualReportData.map((result, index) => {
                  const date = new Date(result.fiscalDateEnding).toLocaleString(
                    "en-us",
                    { month: "short", year: "numeric" }
                  );
                  return (
                    <th key={index} scope="col" className="px-6 py-3">
                      {date}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              <BalanceSheetTableRow
                label={"Total Assets"}
                annualReportData={annualReportData}
                resKey={"totalAssets"}
              />
              <BalanceSheetTableRow
                label={"Total Current Assets"}
                annualReportData={annualReportData}
                resKey={"totalCurrentAssets"}
              />
              <BalanceSheetTableRow
                label={"Fixed Assets"}
                annualReportData={annualReportData}
                resKey={"propertyPlantEquipment"}
              />
              <BalanceSheetTableRow
                label={"Investments"}
                annualReportData={annualReportData}
                resKey={"investments"}
              />
              <BalanceSheetTableRow
                label={"Long Term Investments"}
                annualReportData={annualReportData}
                resKey={"longTermInvestments"}
              />
              <BalanceSheetTableRow
                label={"Short term Investments"}
                annualReportData={annualReportData}
                resKey={"shortTermInvestments"}
              />
              {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Borrowings
                </th>
            </tr> */}
              <BalanceSheetTableRow
                label={"Long Term Debt"}
                annualReportData={annualReportData}
                resKey={"longTermDebt"}
              />
              <BalanceSheetTableRow
                label={"Current Long Term Debt"}
                annualReportData={annualReportData}
                resKey={"currentLongTermDebt"}
              />
              <BalanceSheetTableRow
                label={" Long Term Debt NonCurrent"}
                annualReportData={annualReportData}
                resKey={"longTermDebtNoncurrent"}
              />
              <BalanceSheetTableRow
                label={"Short Long Term Debt Total"}
                annualReportData={annualReportData}
                resKey={"shortLongTermDebtTotal"}
              />

              <BalanceSheetTableRow
                label={"Share Capital"}
                annualReportData={annualReportData}
                resKey={"totalShareholderEquity"}
              />

              <BalanceSheetTableRow
                label={"Reserves"}
                annualReportData={annualReportData}
                resKey={"retainedEarnings"}
              />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default StockBalanceSheet;
