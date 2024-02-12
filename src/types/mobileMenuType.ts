export enum MobileMenuActionType {
    OPEN_MOBILE_MENU = 'OPEN_MOBILE_MENU',
    CLOSE_MOBILE_MENU = 'CLOSE_MOBILE_MENU'
}

export interface MobileMenuState {
    mobileMenu: boolean
}

export interface MobileMenuAction {
    type: string
}