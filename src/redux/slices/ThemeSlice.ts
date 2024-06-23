import {createSlice} from "@reduxjs/toolkit";


interface IState {
    isDarkMode: boolean
}
const initialState: IState = {
    isDarkMode: false
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState:initialState,
    reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode
}
    }
})

 const {toggleTheme} = themeSlice.actions
export const themeActions = {
    toggleTheme
}

export const themeReducer = themeSlice.reducer