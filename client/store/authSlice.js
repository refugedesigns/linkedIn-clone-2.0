import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        token: null,
        expiryDate: null,
        userId: null
    },
    reducers: {
        logout(state) {
            state.isAuth = false
            state.token = null
            state.expiryDate = null
            state.userId = null
        },
        login(state, action) {
            state.token = action.payload.token 
            state.expiryDate = action.payload.expiryDate
            state.userId = action.payload.userId 
            state.isAuth = true 

            setTimeout(() => {
                logout()
            }, action.payload.remainingTime)
        },
    }
})

export const {logout, login} = authSlice.actions

export const isAuth = state => state.auth.isAuth 

export const token = state => state.auth.token 

export const expiryDate = state => state.auth.expiryDate

export const userID = state => state.auth.userId

export default authSlice