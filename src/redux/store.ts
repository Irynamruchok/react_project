import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/MovieSlice";
import {genreReducer} from "./slices/GenreSlice";
import {movieByGenreReducer} from "./slices/MovieByGenreSlice";
import {searchMoviesReducer} from "./slices/SearchMovieSlice";
import {themeReducer} from "./slices/ThemeSlice";

const store = configureStore({
    reducer: {
        movie: movieReducer,
        genre: genreReducer,
        movieByGenre: movieByGenreReducer,
        searchMovie: searchMoviesReducer,
        theme: themeReducer
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export {
    store,
}

export type {
    RootState,
    AppDispatch
}