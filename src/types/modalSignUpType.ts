export enum ModalSignUpActionType {
    OPEN_MODAL_SIGN_UP = 'OPEN_MODAL_SIGN_UP',
    CLOSE_MODAL_SIGN_UP = 'CLOSE_MODAL_SIGN_UP'
}

export interface ModalSignUpState {
    showModalSignUp: boolean
}

export interface ModalSignUpAction {
    type: string
}