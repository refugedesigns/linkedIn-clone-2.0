import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name: "ui",
    initialState: {
        isVisible: false,
        error: false,
        message: null
    },
    reducers: {
        showModal(state) {
            state.isVisible = true
        },
        hideModal(state) {
            state.isVisible = false
        },
        hideError(state) {
            state.error = false
            state.message = null
        },
        showError(state, action) {
            state.error = true
            state.message = action.payload
        }
        
    }
})

export const { showModal, hideModal, showError, hideError } = uiSlice.actions

export const modalIsVisible = state => state.ui.isVisible

export const errorState = state => state.ui.error 

export const message = state => state.ui.message 

export default uiSlice