import {createAsyncThunk} from "@reduxjs/toolkit";
import {genreService} from "../services/genreService";
import {AxiosError} from "axios";

const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, thunkAPI) => {
        try {
            const response = await genreService.getAllGenres()
            return thunkAPI.fulfillWithValue(response.data)

        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export {
    getAllGenres
}