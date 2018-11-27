import { ICoordinate } from "./ICoordinate";

export interface ISite {
    id: string;
    name: string;
    description?: string;
    minDepth?: number;
    maxDepth?: number;
    entryType?: string;
    diveType?: string;
    country?: string;
    ocean?: string;
    coordinate: ICoordinate;
}
