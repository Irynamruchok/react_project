import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovieWithPoster} from "../../interfaces/IMovieWithPoster";
import {getSearchMovies} from "../../thunks/movieThunks";

interface IState {
    currentPage: number,
    movies: IMovieWithPoster[] | null,
    totalPages: number,
    totalResults: number
}

const initialState: IState = {
    currentPage: 1,
    movies: [],
    totalPages: null,
    totalResults: null
}

const searchMovieSlice = createSlice({
    name: 'searchMovieSlice',
    initialState: initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
    },
    extraReducers: builder => builder
        .addCase(getSearchMovies.fulfilled, (state, action) => {
            state.movies = action.payload.movies
            state.currentPage = action.payload.currentPage
            state.totalResults = action.payload.totalResults
            state.totalPages = action.payload.totalPages
        })
})

export const {setCurrentPage} = searchMovieSlice.actions

const {reducer: searchMoviesReducer, actions} = searchMovieSlice

const searchMovieActions = {
    ...actions,
    getSearchMovies
}

export {
    searchMoviesReducer,
    searchMovieActions
}
