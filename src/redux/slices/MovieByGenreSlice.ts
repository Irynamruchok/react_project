import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovieWithPoster} from "../../interfaces/IMovieWithPoster";
import {getMoviesByGenres} from "../../thunks/movieThunks";

interface IState {
    currentPage: number,
    moviesByGenres: IMovieWithPoster[];
    totalPages: number,
    totalResults: number,
    error: string | null;
}

const initialState: IState = {
    currentPage: 1,
    moviesByGenres: [],
    totalPages: null,
    totalResults: null,
    error: null
}

const movieByGenreSlice = createSlice({
    name: 'movieByGenreSlice',
    initialState: initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getMoviesByGenres.fulfilled, (state, action) => {
            state.moviesByGenres = action.payload.movies
            state.currentPage = action.payload.currentPage
            state.totalResults = action.payload.totalResults
            state.totalPages = action.payload.totalPages
        })
})

export const {setCurrentPage} = movieByGenreSlice.actions

const {reducer: movieByGenreReducer, actions} = movieByGenreSlice

const moviesByGenresActions = {
    ...actions,
    getMoviesByGenres
}

export {
    moviesByGenresActions,
    movieByGenreReducer
}