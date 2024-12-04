export interface IMasechet{
    masechetId:number
    masechetName:string
    prakimNum?:string
}
export interface ILimudDetails{
    limudId?:number
    bachurId?:number
    masechetId?:number
    masechetName?:string
    yeshivaId?:number
    yeshivaName?:string
    perek?:string
    startValue?:string
    endValue?:string
    yearId?:number
    yearName?:string
    zmanId?:number
    zmanName?:string
    tested?:boolean
    shiurId?:number
    shiurName:string
}
export interface IYears{
    yearId:number;
    yearName:string;
}
export interface IZman{
    zmanId:number
    zmanName?:string;
}
