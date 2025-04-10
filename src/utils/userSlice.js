import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload 
            // means that initial state will become action.payload
        },
        removeUser: (state,action) => {
            return null
        }
    }
})
export const {addUser, removeUser} = userSlice.actions
// actions me jo reducer functions hain isi ko ham appStore me userReducer ke roop me lete hain

export default userSlice.reducer
