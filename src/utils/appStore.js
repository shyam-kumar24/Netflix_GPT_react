import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'
// since this is default import so in movie slice file that thing is coming which was default export
// userReducer is just a name you give while importing the default export, which is userSlice.reducer

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer
    }
})

export default appStore