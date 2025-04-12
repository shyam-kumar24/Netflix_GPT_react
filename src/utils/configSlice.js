import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        lang: 'en'
    },
    reducers: {
        changeLnaguage: (state,action) => {
            state.lang = action.payload
        }
    }
})

export const {changeLnaguage} = configSlice.actions
export default configSlice.reducer