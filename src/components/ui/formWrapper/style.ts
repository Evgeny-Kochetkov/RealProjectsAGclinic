import styled, { css } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey, lightGray }, device } = theme

export const SBackWr = styled.div<{mainPage: boolean}>`
    display: flex;
    justify-content: start;
    align-items: end;
    width: 100%;
    max-width: ${({mainPage}) => mainPage ? '1300px' : 'none'};
`

const beforeContactsBlock = css`
    &::before {
        content: '';
        position: absolute;
        top: -20px;
        right: -20px;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        border: 1px solid ${grey};
        transform: translateZ(-1px);
    }
`

export const SFrontWr = styled.div<{mainPage: boolean}>`
    margin-top: 20px;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border-radius: 200px 0 200px 0;
    background: ${({mainPage}) => mainPage ? lightGray : 'none'};
    transform-style: preserve-3d;
    transform: translateZ(1px);
    padding: 20px 146px 30px 112px;

    ${({mainPage}) => mainPage ? beforeContactsBlock : 'none'}

    @media (${device.laptop}) {
        border-radius: 100px 0 100px 0;
        padding: 20px 30px 30px 30px;
    }

    @media (${device.mobileL}) {
        padding: 40px 16px;
        grid-template: 1fr / 1fr;
        width: calc(100% - 8px);
        gap: 30px;

        &::before {
            right: -8px;
        }
    }
`