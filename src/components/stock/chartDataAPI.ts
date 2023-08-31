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