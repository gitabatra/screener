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

async function getBalanceSheet(company) {
    const apiKey = process.env.API_KEY //'EGAI68J68Y9G55QE'
    return new Promise((resolve, reject) => {
        const url = `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${company}&apikey=${apiKey}`

        fetch(url)
            .then(data => {
                resolve(data.json())
            })
            .catch(error => {
                reject(error)
            })
    })
}

// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo

async function getCompanyDailySeries(company) {
    const apiKey = process.env.API_KEY //'EGAI68J68Y9G55QE'
    return new Promise((resolve, reject) => {
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${company}&apikey=${apiKey}`

        fetch(url)
            .then(data => {
                resolve(data.json())
            })
            .catch(error => {
                reject(error)
            })
    })
}

// https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=demo

async function getTickers(company) {
    const apiKey = process.env.API_KEY //'EGAI68J68Y9G55QE'
    return new Promise((resolve, reject) => {
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${company}&apikey=${apiKey}`

        fetch(url)
            .then(data => {
                resolve(data.json())
            })
            .catch(error => {
                reject(error)
            })
    })
}

// async function writeCompanyOverview(overview) {
//     await fs.appendFile('./data/companyOverview.json', JSON.stringify(overview))
// }

// async function writeCompanyBalanceSheet(balanceSheet) {
//     await fs.writeFile('./data/companyBalanceSheet.json', JSON.stringify(balanceSheet))
// }

async function writeCompanyDailySeriesData(dailyData) {
    await fs.writeFile('./data/companyDailySeriesData.json', JSON.stringify(dailyData))
}

async function main() {   
    const tickers =['IBM','SAIC','BA','BABA','BAC']
    const tickersData = []
    const overviews = []
    const balanceSheet = []
    const dailySeries = []
    for(let i=0;i< tickers.length; i++){
        // const companyOverview = await getCompanyOverview(tickers[i])
        // const balanceSheetData = await getBalanceSheet(tickers[i])
        const dailySeriestData = await getCompanyDailySeries(tickers[i])
        // overviews.push(companyOverview)
        // balanceSheet.push(balanceSheetData)
        dailySeries.push(dailySeriestData)
    }
    // const companyOverview = await getCompanyOverview('IBM')
   // await getCompanyOverview('APPLE')

    console.log(overviews)

    // await writeCompanyOverview(overviews)
    // await writeCompanyBalanceSheet(balanceSheet)
    await writeCompanyDailySeriesData(dailySeries)
}

main()
    .then(() => {
        console.log('Main finished running')
    })
    .catch(error => {
        console.error(error)
    })