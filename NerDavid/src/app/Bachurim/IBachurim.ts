import { ILimudDetails } from "./limud/ILimud"

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
    bachurID?:number
    firstName?:string
    lastName:string
    city?:ICity
    adress?:string
    yeshivaID?:number
    shiurID?:number
    statusID?:IStatus;
}
export interface INewEditBachur{
    bachur:IBachur;
    phones?:IPhones[]
    limud?:ILimudDetails[]
}