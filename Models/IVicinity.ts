import { ICoordinate } from "./ICoordinate";

export type ILocationType = 'site' | 'center';

export interface IVicinity {
    coordinate: ICoordinate;
    locations: {
        locationType: ILocationType;
        locationId: string;
        distance: number;
    }[]
}
