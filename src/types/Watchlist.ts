import { Stock } from './Stock'

export interface Watchlist {
    id: string,
    wlName: string,
    wlData: Stock[]
}