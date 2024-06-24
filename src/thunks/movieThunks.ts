import {createAsyncThunk} from "@reduxjs/toolkit";
import {movieService} from "../services/movieService";
import {getPosterUrl} from "../helpers/getPosterUrl";
import {AxiosError} from "axios";

const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (page: string, thunkAPI) => {
        try {
            const response = await movieService.getAllMovie(page)
            const moviesWithPostersUrls = response.data.results.map((movie) => ({
                ...movie,
                posterUrl: getPosterUrl(movie.poster_path)
            }))
            return thunkAPI.fulfillWithValue({
                movies: moviesWithPostersUrls,
                currentPage: response.data.page,
                totalPages: response.data.total_pages,
                totalResults: response.data.total_results
            })
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const getMovieById = createAsyncThunk(
    'moviesSlice/getMovieById',
    async (id: string, thunkAPI) => {
        try {
            const response = await movieService.getMovieById(id)
            const movieWithPosterUrl = {
                ...response.data,
                posterUrl: getPosterUrl(response.data.poster_path)
            }
            return thunkAPI.fulfillWithValue({movieById: movieWithPosterUrl})
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const getMoviesByGenres = createAsyncThunk(
    'movieSlice/getMoviesByGenres',
    async ({page, genreId}: { page: string, genreId: string }, thunkAPI) => {
        try {
            const response = await movieService.getMoviesByGenre(page, genreId)
            const moviesWithPosters = response.data.results.map((movie) => ({
                ...movie,
                posterUrl: getPosterUrl(movie.poster_path)
            }))
            return thunkAPI.fulfillWithValue({
                movies: moviesWithPosters,
                currentPage: response.data.page,
                totalPages: response.data.total_pages,
                totalResults: response.data.total_results

            })
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }

    }
)

const getSearchMovies = createAsyncThunk(
    'searchMovieSlice/searchMovies',
    async ({name, page}: { name: string, page: string }, thunkAPI) => {
        try {
            const response = await movieService.searchMovies(name, page)

            const moviesWithPostersUrls = response.data.results.map((movie) => ({
                ...movie,
                posterUrl: getPosterUrl(movie.poster_path)
            }))

            return thunkAPI.fulfillWithValue({
                movies: moviesWithPostersUrls,
                currentPage: response.data.page,
                totalPages: response.data.total_pages,
                totalResults: response.data.total_results
            })
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export {
    getAllMovies,
    getMovieById,
    getMoviesByGenres,
    getSearchMovies
}