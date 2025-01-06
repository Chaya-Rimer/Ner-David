import { KeyValue } from "@angular/common"
import { IYeshiva } from "../IBachurim"

export interface IMasechet {
    masechetId: number
    masechetName: string
    prakimNum?: string
}
export interface ILimud {
    limudId?: number
    bachurId?: number
    masechet: KeyValue<number, string>
    perek?: string
    startValue?: string
    endValue?: string
    year: KeyValue<number, string>
    zman: KeyValue<number, string>
    tested?: boolean
    yeshiva: IYeshiva;
    shiur: KeyValue<number, string>
}
export interface IYears {
    yearId: number;
    yearName: string;
}
export interface IZman {
    zmanId: number
    zmanName?: string;
}
export interface ILimudDetailsTable{
    limudId?: number
    bachurId?: number
    masechetId?:number
    masechetName?:string
    perek?: string
    startValue?: string
    endValue?: string
    yearId?:number
    yearName?:string
    zmanId?:number
    zmanName?:string
    tested?: boolean
    yeshivaId?:number
    yeshivaName?:string
    shiurId?:number
    shiurName:string
}
