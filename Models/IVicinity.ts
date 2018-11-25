import { ICenter } from "./ICenter";
import { ICoordinate } from "./ICoordinate";
import { ISite } from "./ISite";

export type ILocationType = 'site' | 'center';

export interface IVicinity {
    coordinate: ICoordinate;
    locations: {
        type: ILocationType;
        distance: number;
        item: ISite | ICenter
    }[]
}
