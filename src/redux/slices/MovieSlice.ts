import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovieWithPoster} from "../../interfaces/IMovieWithPoster";
import {getAllMovies, getMovieById} from "../../thunks/movieThunks";


interface IState {
    currentPage:number;
    movieById: IMovieWithPoster | null;
    movies:IMovieWithPoster[];
    totalPages:number
    totalResults:number
}
const initialState:IState = {
    currentPage: 1,
    movieById:null,
    movies: [],
    totalPages: 0,
    totalResults: 0
}


const movieSlice = createSlice({
    name:'movieSlice',
    initialState: initialState,
    reducers:{
        setCurrentPage(state,action:PayloadAction<number>) {
            state.currentPage = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAllMovies.fulfilled, (state, action) => {
            state.movies = action.payload.movies
            state.currentPage = action.payload.currentPage
            state.totalPages = action.payload.totalPages
            state.totalResults = action.payload.totalResults
        })
        .addCase(getMovieById.fulfilled,(state, action) => {
            state.movieById = action.payload.movieById
        })



})

export const {setCurrentPage} = movieSlice.actions
const {reducer: movieReducer, actions} = movieSlice
const movieActions = {
    ...actions,
    getAllMovies,
    getMovieById,


}

export {
    movieActions,
    movieReducer,
}