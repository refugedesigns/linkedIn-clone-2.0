import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        name: null,
        profession: null,
        profilePic: null,
        userId: null,
        email: null
    },
    reducers: {
        updateUser(state, action) {
            state.name = action.payload.name 
            state.profession = action.payload.profession 
            state.profilePic = action.payload.profilePic
            state.userId = action.payload.userId
            state.email = action.payload.email
        },
        clearUser(state) {
            state.name = null
            state.profession = null 
            state.profilePic = null
            state.userId = null
            state.email = null
        }
    }
})

export const { updateUser, clearUser } = userSlice.actions

export const userPic = state => state.user.profilePic

export const userProfession = state => state.user.profession

export const username = state => state.user.name

export default userSlice