import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
// userReducer is just a name you give while importing the default export, which is userSlice.reducer

const appStore = configureStore({
    reducer: {
        user: userReducer
    }
})

export default appStore