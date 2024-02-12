import { configureStore } from '@reduxjs/toolkit'

import { TypedUseSelectorHook, useSelector } from 'react-redux'

import customTooltipReducer from '@/redux/features/customTooltipSlise'
import mobileMenuReducer from '@/redux/features/mobileMenuSlise'
import modalSignUpReducer from '@/redux/features/modalSignUpSlise'


export const store = configureStore({
    reducer: {
        customTooltipReducer,
        mobileMenuReducer,
        modalSignUpReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector