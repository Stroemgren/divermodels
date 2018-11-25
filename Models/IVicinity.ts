import { ICenter } from "./ICenter";
import { ILocation } from "./ILocation";
import { ISite } from "./ISite";

export interface IVicinity {
    location: ILocation;
    items: {
        distance: number;
        item: ISite | ICenter
    }[]
}
