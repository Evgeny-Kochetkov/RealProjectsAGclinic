import { createSlice } from '@reduxjs/toolkit'

type InitialStateType = {
    mobileMenuState: boolean;
}

const initialState: InitialStateType = {
    mobileMenuState: false
}

const mobileMenu = createSlice({
    name: 'mobileMenu',
    initialState: initialState,
    reducers: {
        closeMobileMenu: (state) => {
            state.mobileMenuState = false
        },
        openMobileMenu: (state) => {
            state.mobileMenuState = true
        }
    }
})

export const { closeMobileMenu, openMobileMenu } = mobileMenu.actions
export default mobileMenu.reducer