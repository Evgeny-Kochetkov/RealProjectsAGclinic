import { createSlice } from '@reduxjs/toolkit'

type InitialStateType = {
    modalSignUpState: boolean;
}

const initialState: InitialStateType = {
    modalSignUpState: false
}

const modalSignUp = createSlice({
    name: 'modalSignUp',
    initialState: initialState,
    reducers: {
        closeModalSignUp: (state) => {
            state.modalSignUpState = false
        },
        openModalSignUp: (state) => {
            state.modalSignUpState = true
        }
    }
})

export const { closeModalSignUp, openModalSignUp } = modalSignUp.actions
export default modalSignUp.reducer