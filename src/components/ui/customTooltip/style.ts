import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey, lightGray }, device } = theme

export const SCustomTooltip = styled.div<{status: string}>`
    position: fixed;
    right: 70px;
    top: 156px;
    width: 100%;
    max-width: 454px;
    height: 100%;
    max-height: 114px;
    display: flex;
    gap: 30px;
    align-items: center;
    padding: 15px 20px;
    background-color: ${({status}) => {
        switch(status) {
            case 'error':
                return '#FCE5E5'
            case 'success':
                return '#C9FAED'
            case 'notice':
                return '#DFDFF5'
        }
    }};
    border-radius: 10px;
    z-index: 50;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 4px;
        background-color: ${({status}) => {
            switch(status) {
                case 'error':
                    return '#EB5757'
                case 'success':
                    return '#0C9'
                case 'notice':
                    return '#5458F7'
            }
        }};
        border-radius: 10px;
    }
`

export const STextBlock = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 325px;
`

export const STitle = styled.span`
    color: ${black};
    font-family: var(--font-cambria);
    font-size: 24px;
    font-weight: 700;
`

export const SDescr = styled.p`
    margin-top: 10px;
    color: ${black};
    font-size: 16px;
    font-weight: 500;
`