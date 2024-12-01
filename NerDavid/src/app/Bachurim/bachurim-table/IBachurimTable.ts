import { IPhones } from "./IPhones";

export interface IbachurimTable {
    bachurId: number;
    lastName?: string;
    firstName?: string;
    yeshiva?: string;
    shiur?: string;
    yeshivaType?: string;
    adress?: string;
    city?: string;
    phones: IPhones[];
    status:string;
    statusName:string;
}