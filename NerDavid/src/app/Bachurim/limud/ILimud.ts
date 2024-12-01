export interface IMasechet{
    masechetId:number
    masechetName:string
    prakimNum?:string
}
export interface ILimud{
    limudId?:number
    bachurId?:number
    masechet?:IMasechet
    perek?:string
    startValue?:string
    endValue?:string
    yearId?:number
    zmanId?:number
    tested?:boolean
}