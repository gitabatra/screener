/* eslint-disable @typescript-eslint/require-await */
import * as fs from 'fs/promises'

async function getCompanyOverview(company) {
    const apiKey = process.env.API_KEY //'EGAI68J68Y9G55QE'
    return new Promise((resolve, reject) => {
        const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${company}&apikey=${apiKey}`

        fetch(url)
            .then(data => {
                resolve(data.json())
            })
            .catch(error => {
                reject(error)
            })
    })
}

async function writeCompanyOverview(overview) {
    await fs.writeFile('./data/companyOverview.json', JSON.stringify(overview))
}

async function main() {    
    const companyOverview = await getCompanyOverview('IBM')
    await getCompanyOverview('APPLE')

    const overviews = []

    overviews.push(companyOverview)

    console.log(companyOverview)

    await writeCompanyOverview(overviews)
}

main()
    .then(() => {
        console.log('Main finished running')
    })
    .catch(error => {
        console.error(error)
    })