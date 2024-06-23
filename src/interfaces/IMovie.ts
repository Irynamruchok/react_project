import {IGenre} from "./IGenre";

export interface IMovie {
    id:number;
    genres: IGenre[];
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    vote_average:number;
}