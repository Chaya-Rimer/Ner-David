import { ILimud } from "./add-bachur/limud/ILimud";

export interface IYeshiva{
    yeshivaId:number
    yeshivaName:string
}
export interface IShiur{
    shiurId:number;
    shiurName:string;
}
export interface ICity{
    cityId:number
    cityName:string
}
export interface IPhones{
    phoneID?:number
    bachurID?:number
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
    cityID?:number
    adress?:string
    yeshivaID?:number
    shiurID?:number
    statusID?:IStatus;
}
export interface INewEditBachur{
    bachur:IBachur;
    phones?:IPhones[]
    limud?:ILimud[]
}
