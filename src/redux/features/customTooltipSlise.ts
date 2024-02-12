import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateType = {
    customTooltipState: CustomTooltipStateType;
}

type CustomTooltipStateType = {
    status: 'error' | 'success' | 'notice',
    titleText: string,
    text: string
} | null

const initialState: InitialStateType = {
    customTooltipState: null
}

const customTooltip = createSlice({
    name: 'customTooltip',
    initialState: initialState,
    reducers: {
        closeCustomTooltip: (state) => {
            state.customTooltipState = null
        },
        setCustomTooltip: (state, action: PayloadAction<CustomTooltipStateType>) => {
            state.customTooltipState = action.payload
        }
    }
})

export const { closeCustomTooltip, setCustomTooltip } = customTooltip.actions
export default customTooltip.reducer