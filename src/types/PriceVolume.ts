// "Global Quote": {
//     "01. symbol": "IBM",
//     "02. open": "145.5100",
//     "03. high": "146.1700",
//     "04. low": "143.0201",
//     "05. price": "143.2400",
//     "06. volume": "4824654",
//     "07. latest trading day": "2023-09-26",
//     "08. previous close": "146.4800",
//     "09. change": "-3.2400",
//     "10. change percent": "-2.2119%"
// }

export interface PriceVolume {
  "Global Quote": {
    "01. symbol": string;
    "02. open": number;
    "03. high": number;
    "04. low": number;
    "05. price": number;
    "06. volume": number;
    "07. latest trading day": string;
    "08. previous close": number;
    "09. change": number;
    "10. change percent": string;
  };
}
