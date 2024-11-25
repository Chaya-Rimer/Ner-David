export interface IMasechet{
    masechetId:number
    masechetName:string
    prakimNum:string
}
export interface INewEditBachur{
    bachurId?:number
    firstName?:string
    lastName:string
    cityId?:number
    adress?:string
    phone1?:string
    phone2?:string
    phone3?:string
    yeshivaId?:number
    shiurId?:number
    masechetId?:number
    perek:string
    startValue?:string
    endValue?:string
    yearId?:number
    zmanId?:number
    tested?:boolean
}
