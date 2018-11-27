import { ICoordinate } from "./ICoordinate";

export interface ICenter {
    id: string;
    name: string;
    coordinate: ICoordinate;
    address1?: string;
    address2?: string;
    city?: string;
    region?: string;
    contry?: string;
    zipcode?: string;
    phone?: string;
    email?: string;
    website?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
}
