import {IMovie} from "./IMovie";

export interface IMovieWithPoster extends IMovie {
    posterUrl: string;
}