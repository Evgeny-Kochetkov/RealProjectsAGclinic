import styled, { css } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey, lightGray }, device } = theme

export const SContactsContent = styled.div<{mainPage: boolean}>`
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

export const SContactsBlock = styled.div<{mainPage: boolean}>`
    margin-top: 20px;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border-radius: 200px 0 200px 0;
    background: ${({mainPage}) => mainPage ? lightGray : 'none'};
    transform-style: preserve-3d;
    transform: translateZ(1px);
    padding: ${({mainPage}) => mainPage ? '20px 146px 30px 112px' : '0'};

    ${({mainPage}) => mainPage ? beforeContactsBlock : 'none'}

    @media (${device.laptop}) {
        border-radius: 100px 0 100px 0;
        padding: 20px 30px 30px 30px;
    }

    @media (${device.mobileL}) {
        padding: 40px 16px;
        grid-template: 1fr 1.3fr / 1fr;
        width: calc(100% - 8px);
        gap: 30px;

        &::before {
            right: -8px;
        }
    }
`

const backgroundMainPage = css`
    background: url('/images/bgContacts1.svg') 30px 30px / 100% 100% no-repeat;

    @media (${device.mobileL}) {
        background: url('/images/bgContacts3.svg') 30px 30px / 100% 100% no-repeat;
    }
`

const backgroundContactsPage = css`
    background: url('/images/bgContacts2.svg') 60% 120% / 60% 60% no-repeat;
`

export const STextContent = styled.div<{mainPage: boolean}>`
    position: relative;
    display: flex;
    flex-direction: column;
    color: ${black};
    ${({mainPage}) => mainPage ? backgroundMainPage : backgroundContactsPage}
`

export const SH1 = styled.h1`
    margin-top: 30px;
    color: #000;
    font-family: var(--font-cambria);
    font-size: 44px;
    font-weight: 400;
    max-width: 505px;

    @media (${device.mobileL}) {
        margin-top: 0;
        text-align: center;
        max-width: 100%;
        font-size: 24px;
    }

    @media (${device.mobileS}) {
        font-size: 22px;
    }
`

export const SH2 = styled.h2`
    margin-top: 30px;
    color: #000;
    font-family: var(--font-cambria);
    font-size: 44px;
    font-weight: 400;
    max-width: 505px;

    @media (${device.mobileL}) {
        margin-top: 0;
        text-align: center;
        max-width: 100%;
        font-size: 24px;
    }

    @media (${device.mobileS}) {
        font-size: 22px;
    }
`

export const SP = styled.p`
    margin-top: 20px;
    font-size: 20px;
    line-height: 150%;
    max-width: 400px;

    @media (${device.mobileL}) {
        font-size: 18px;
        line-height: 150%;
    }
`

export const SInfoWrap = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const SPhonesWrap = styled.div`
    display: flex;
    flex-direction: column;
`