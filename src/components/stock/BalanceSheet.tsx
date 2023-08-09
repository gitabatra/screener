function BalanceSheet(){
    return (<>
     <div className="py-10 text-white min-h-screen">
     <div className="mt-20 pt-12"></div>
     <div className="pl-6 pt-8">
        <h1 className="text-2xl">Balance Sheet</h1>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-4">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    
                </th>
                <th scope="col" className="px-6 py-3">
                    March 2020
                </th>
                <th scope="col" className="px-6 py-3">
                March 2021
                </th>
                <th scope="col" className="px-6 py-3">
                March 2022
                </th>
                <th scope="col" className="px-6 py-3">
                March 2023
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Share Capital
                </th>
                <td className="px-6 py-4">
                    18
                </td>
                <td className="px-6 py-4">
                    20
                </td>
                <td className="px-6 py-4">
                    24
                </td>
                <td className="px-6 py-4">
                    24
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Reserves
                </th>
                <td className="px-6 py-4">
                    18
                </td>
                <td className="px-6 py-4">
                    20
                </td>
                <td className="px-6 py-4">
                    24
                </td>
                <td className="px-6 py-4">
                    24
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Borrowings
                </th>
                <td className="px-6 py-4">
                    18
                </td>
                <td className="px-6 py-4">
                    20
                </td>
                <td className="px-6 py-4">
                    24
                </td>
                <td className="px-6 py-4">
                    24
                </td>
            </tr>
           
        </tbody>
    </table>
</div>

    </div>
    </div>
    </>);
}

export default BalanceSheet;