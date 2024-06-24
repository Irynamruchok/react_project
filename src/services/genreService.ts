import {AxiosResponse} from "axios";
import {axiosInstance} from "./axiosInstance";
import {urls} from "../config/urls";
import {IGenres} from "../interfaces/IGenres";


const genreService = {
    getAllGenres: async (): Promise<AxiosResponse<IGenres>> => {
        return await axiosInstance.get(urls.genres.base)
    }
}

export {
    genreService
}