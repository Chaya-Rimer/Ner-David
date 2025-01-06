import { KeyValue } from "@angular/common"
import { ILimud } from "./limud/ILimud"

export interface IYeshiva{
    yeshivaId:number
    yeshivaName:string
    yeshivaType?:string
}
export interface IShiur{
    shiurId:number
    shiurName?:string
    shiurType?:string
}
 export interface ICity{
    cityId:number
    cityName:string
}
export interface IPhones{
    phoneId?:number
    bachurId?:number
    phone:string;
}

export interface IStatus{
    statusId:number
    status?:string
    statusSympol?:string
}
export interface IBachur{
    bachurId?:number
    firstName?:string
    lastName?:string
    city?:KeyValue<number,string>
    adress?:string
    yeshiva:IYeshiva
    shiur?:KeyValue<number,string>
    status?:KeyValue<number,string>;
}
export interface INewEditBachur{
    bachur:IBachur;
    phones:IPhones[]
    limud?:ILimud[]
}