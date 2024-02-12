export interface  CustomTooltipState {
    customTooltipState: {
        status: 'error' | 'success'| 'notice',
        titleText: string,
        text: string
    } | null
}

export interface CustomTooltipAction {
    type: string,
    payload: {
        status: 'error' | 'success'| 'notice',
        titleText: string,
        text: string
    } | null
}