import {IMovie} from "./IMovie";

export interface IPaginatedMovie {
    page: number;
    results: IMovie[];
    total_pages:number;
    total_results:number;
}