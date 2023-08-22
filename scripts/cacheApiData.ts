// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
// var url = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo';


// request.get({
//     url: url,
//     json: true,
//     headers: {'User-Agent': 'request'}
//   }, (err, res, data) => {
//     if (err) {
//       console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//       console.log('Status:', res.statusCode);
//     } else {
//       // data is successfully parsed as a JSON object:
//       console.log(data);
//     }
// });


// fetch(url).then()

async function fooAsync() {
    console.log('fooAsync')
}

async function main(): Promise<void> {
    console.log('do soemething')
    
    await fooAsync()
    
    console.log('more things')

    fetch('')
        .then((data) => {
            //process the data
        })
        .then()
        .catch()
}

main()
    .then(() => {
        
        console.log('Main finished running')
    })
    .catch(error => {
        console.error(error)
    })