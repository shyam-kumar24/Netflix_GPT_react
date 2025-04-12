import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'
import gptReducer from './gptSlice'
import configReducer from './configSlice'

// since this is default import so in movie slice file that thing is coming which was default export
// userReducer is just a name you give while importing the default export, which is userSlice.reducer

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer
    }
})

export default appStore