import styled, { css } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey }, device } = theme

export const SCity = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-montserratAlternates);
    font-weight: 600;
    height: 24px;
    color: #FFF;

    @media (${device.mobileL}) {
        height: 20px;
        font-size: 14px;
    }

    @media (${device.mobileS}) {
        font-size: 12px;
    }
`

export const SP = styled.p<{footer?: boolean}>`
    text-align: ${({footer}) => footer ? 'start': 'end'};
    @media (${device.tablet}) {
        font-size: 14px;
    }

    @media (${device.mobileS}) {
        font-size: 12px;
    }
`

const bottom = css<{mobileMenu?: boolean}>`
    bottom: 0;
    width: 100%;
    transform: translateY(calc(100% + 10px));
    right: 0;

    @media (${device.mobileL}) {
        left: ${({mobileMenu}) => mobileMenu ? 'auto': '0'};
    }
`

const top = css`
    top: 0;
    left: -34px;
    width: calc(100% + 34px);
    transform: translateY(calc(-100% - 10px));
`

export const SCities = styled.div<{activeCities: boolean, footer?: boolean, mobileMenu?: boolean}>`
    position: absolute;
    display: ${({activeCities}) => activeCities ? 'block' : 'none'};
    max-width: 206px;
    height: auto;
    padding: 10px 0;
    border-radius: 10px;
    border: 1px solid ${black};
    background: #FFF;
    overflow: hidden;
    z-index: 30;
    ${({footer}) => footer ? top : bottom}

    @media (${device.mobileL}) {
        width: 70vw;
    }
`

export const SCityLink = styled.a`
    color: ${black};
    display: block;
    padding-left: 20px;
    width: 100%;
    min-height: 32px;
    line-height: 32px;
    text-align: start;
    font-size: 16px;
    &:hover {
        background: ${grey};
        color: #FFF;
        font-weight: 600;
    }
`