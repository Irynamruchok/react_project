import {axiosInstance} from "./axiosInstance";
import {urls} from "../config/urls";
import {AxiosResponse} from "axios";
import {IPaginatedMovie} from "../interfaces/IPaginatedMovie";
import {IMovie} from "../interfaces/IMovie";

const movieService = {
    getAllMovie: async (page:string):Promise<AxiosResponse<IPaginatedMovie>> => {
       return  await axiosInstance.get<IPaginatedMovie>(urls.movies.base, {params:{page:page}})
    },
    getMovieById: async (id:string):Promise<AxiosResponse<IMovie>> => {
        return  await axiosInstance.get<IMovie>(`/movie/${id}`)
    },
    getMoviesByGenre: async (page:string, genreId:string):Promise<AxiosResponse<IPaginatedMovie>> => {
        return await axiosInstance.get(urls.movies.base, {params:{with_genres:genreId,page:page}})
    },
    searchMovies: async (name:string, page:string):Promise<AxiosResponse<IPaginatedMovie>> => {
        return axiosInstance.get('/search/movie',{params:{query:name, page:page}})
    }
}

export {
    movieService
}