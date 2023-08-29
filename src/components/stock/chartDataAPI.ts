// import { DailyData, TimeSeriesDaily } from "../../types";

export const getMonthDate = (index: number) =>{
    const date = new Date();
    date.setMonth(date.getUTCMonth() - index);
    return date
}

export const getYearDate = (index: number) =>{
    const date = new Date();
    date.setFullYear(date.getUTCFullYear() - index);
    return date
}

// export const getChartDataByMonth = (dailyData: DailyData, month: number) =>{
//     const monthChartData: TimeSeriesDaily[] = []
//     const monthDate = getMonthDate(month);
//     Object.keys(dailyData).map((key: keyof TimeSeriesDaily) => {
//         const datestr = new Date(key).getTime();
//         if (monthDate.getTime()< datestr){
//             monthChartData.push({ [key]  : dailyData[key] })
//         } 
//     });
//     return monthChartData
// }

// export const getChartDataByYear = (dailyData: DailyData, year: number) =>{
//     const yearChartData: TimeSeriesDaily[] = []
//     const yearDate = getYearDate(year);
//     Object.keys(dailyData).map((key: keyof TimeSeriesDaily) => {
//         const datestr = new Date(key).getTime();
//         if (yearDate.getTime()< datestr){
//             yearChartData.push({ [key]  : dailyData[key] as DailyData })
//         } 
//     });
//     return yearChartData
// }

export const getMonthNames = (numMonth: number) =>{
    const monthNames: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const today = new Date();
    //let d;
    const lastMonthNames: string[] = [];

   for(let i = numMonth; i > 0; i -= 1) {
      const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
      const monName: string = monthNames[date.getMonth()]
      lastMonthNames.push(monName +" "+ (date.getFullYear()).toString());
    }
    return lastMonthNames
}



// export const getDailyStockChartData =(dailyData: DailyData, month: number) =>{ 
//     const  lastSixMonthNames =getMonthNames(6);
//     console.log("last six month names",lastSixMonthNames);
  
//     const sixMonthChartData = getChartDataByMonth(dailyData,month);
//     console.log("-------six month data----",sixMonthChartData);
  
//   let dataObject: { [x: string]: { [x: string]: TimeSeriesDaily; } }[] =[]
  
//   for(let i=0; i<lastSixMonthNames.length; i++){
//   console.log("lasmonth[i]",lastSixMonthNames[i])
//   const datestr1 = new Date(lastSixMonthNames[i]).getUTCMonth();
//   console.log("Month: ",datestr1);
//   const testObj= {}
//   for(let j=0; j<sixMonthChartData.length; j++){
//       Object.keys(sixMonthChartData[j]).map((key) =>{
//           //console.log("key is :",key)
//           const datestr = new Date(key).getUTCMonth();
//         //   return (datestr1 === datestr)
//           if(datestr1 === datestr){
//             Object.assign(testObj, sixMonthChartData[j])
//           }
//       })
//       dataObject[lastSixMonthNames[i]] = testObj;
//       console.log("Test object: ",testObj)
// }
//   console.log("------DataObject------",dataObject[lastSixMonthNames[i]])
//   }
//   return dataObject
//   }