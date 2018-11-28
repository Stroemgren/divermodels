import { ICoordinate } from "./ICoordinate";

export interface ICenterSuggestion {
    id: string;
    name: string;
    coordinate: ICoordinate;
}

export interface ISiteSuggestions {
    id: string;
    name: string;
    coordinate: ICoordinate;
}