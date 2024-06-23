import {createSlice} from "@reduxjs/toolkit";
import {IGenre} from "../../interfaces/IGenre";
import {getAllGenres} from "../../thunks/genreThunks";

interface IState {
    genres: IGenre[];
    error:string | null
}

const initialState:IState = {
    genres: [],
    error: null
}

const genreSlice = createSlice({
    name:'genreSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAllGenres.fulfilled, (state, action) => {
            state.genres = action.payload.genres
        })
})

const {reducer: genreReducer, actions} = genreSlice
const genreActions = {
    ...actions,
    getAllGenres
}

export {
    genreActions,
    genreReducer
}