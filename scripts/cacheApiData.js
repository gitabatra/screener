/* eslint-disable @typescript-eslint/require-await */
import * as fs from 'fs/promises'

// async function getCompanyOverview(company) {
//     const apiKey = process.env.API_KEY //'EGAI68J68Y9G55QE'
//     return new Promise((resolve, reject) => {
//         const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${company}&apikey=${apiKey}`

//         fetch(url)
//             .then(data => {
//                 resolve(data.json())
//             })
//             .catch(error => {
//                 reject(error)
//             })
//     })
// }

// async function getBalanceSheet(company) {
//     const apiKey = process.env.API_KEY //'EGAI68J68Y9G55QE'
//     return new Promise((resolve, reject) => {
//         const url = `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${company}&apikey=${apiKey}`

//         fetch(url)
//             .then(data => {
//                 resolve(data.json())
//             })
//             .catch(error => {
//                 reject(error)
//             })
//     })
// }



async function getCompanyDailySeries(company) {
    const apiKey = process.env.API_KEY //'EGAI68J68Y9G55QE'
    return new Promise((resolve, reject) => {
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${company}&outputsize=full&apikey=${apiKey}`

        fetch(url)
            .then(data => {
                resolve(data.json())
            })
            .catch(error => {
                reject(error)
            })
    })
}

/* fetch stocks by search keywords */

// async function getTickers(keyword) {
//     const apiKey = process.env.API_KEY //'EGAI68J68Y9G55QE'
//     return new Promise((resolve, reject) => {
//         const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${apiKey}`

//         fetch(url)
//             .then(data => {
//                 resolve(data.json())
//             })
//             .catch(error => {
//                 reject(error)
//             })
//     })
// }

/* fetch Income statement for profit/loss annual and quarter data*/

// async function getIncomeStatement(company) {
//     const apiKey = process.env.API_KEY //'EGAI68J68Y9G55QE'
//     return new Promise((resolve, reject) => {
//         const url = `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${company}&apikey=${apiKey}`

//         fetch(url)
//             .then(data => {
//                 resolve(data.json())
//             })
//             .catch(error => {
//                 reject(error)
//             })
//     })
// }

// async function writeCompanyOverview(overview) {
//     await fs.appendFile('./data/companyOverview.json', JSON.stringify(overview))
// }

// async function writeCompanyBalanceSheet(balanceSheet) {
//     await fs.writeFile('./data/companyBalanceSheet.json', JSON.stringify(balanceSheet))
// }

async function writeCompanyDailySeriesData(dailyData) {
    await fs.writeFile('./data/companyDailySeriesData.json', JSON.stringify(dailyData))
}

// async function writeTickerData(tickerData) {
//     await fs.writeFile('./data/companyTickerSearchData.json', JSON.stringify(tickerData))
// }

// async function writeIncomeData(incomeData) {
//     await fs.writeFile('./data/companyIncomeData.json', JSON.stringify(incomeData))
// }

async function main() {   
    const tickers =['IBM','SAIC','BA','BABA','BAC']
    const tickersData = []
    const overviews = []
    const balanceSheet = []
    const dailySeries = []
    const incomeData = []
 
    for(let i=0;i< tickers.length; i++){
        // const companyOverview = await getCompanyOverview(tickers[i])
        // const balanceSheetData = await getBalanceSheet(tickers[i])
       const dailySeriestData = await getCompanyDailySeries(tickers[i])
        // const stockSearchData = await getTickers(tickers[i])
        //const income = await getIncomeStatement(tickers[i])

        // overviews.push(companyOverview)
        // balanceSheet.push(balanceSheetData)
        dailySeries.push(dailySeriestData)
        // tickersData.push(stockSearchData)
        //incomeData.push(income)
    }
    // const companyOverview = await getCompanyOverview('IBM')
   // await getCompanyOverview('APPLE')

    console.log(overviews)

    // await writeCompanyOverview(overviews)
    // await writeCompanyBalanceSheet(balanceSheet)
    await writeCompanyDailySeriesData(dailySeries)
    // await writeTickerData(tickersData)
    //await writeIncomeData(incomeData)
}

main()
    .then(() => {
        console.log('Main finished running')
    })
    .catch(error => {
        console.error(error)
    })