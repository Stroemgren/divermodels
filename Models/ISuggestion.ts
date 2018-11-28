import { ICoordinate } from "./ICoordinate";

export interface ICenterSuggestion {
    id: string;
    name: string;
    coordinate: ICoordinate;
}

export interface ISiteSuggestion {
    id: string;
    name: string;
    coordinate: ICoordinate;
}