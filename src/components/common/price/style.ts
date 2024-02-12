import styled, { css } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey, lightGray }, device } = theme

export const SH1 = styled.h1`
    margin-top: 402px;
    color: #FFF;
    font-family: var(--font-cambria);
    font-size: 44px;
    font-weight: 400;
    text-align: center;

    @media (${device.mobileL}) {
        font-size: 32px;
    }

    @media (${device.mobileS}) {
        font-size: 30px;
    }
`

export const SHr = styled.hr`
    margin-top: 10px;
    margin-bottom: 50px;
    border: none;
    height: 1px;
    background-color: #FFF;
    width: 50%;

    @media (${device.mobileL}) {
        width: 100%;
    }
`

export const SPrices = styled.section`
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    padding: 40px 70px;
    gap: 20px;
    justify-content: space-between;
    
    > img {
        width: 100%;
        max-width: 820px;
        max-height: 450px;
        height: 100%;
        border-radius: 30px;
        object-fit: cover;
    }

    @media (${device.laptop}) {
        display: flex;
        flex-direction: column;
        padding: 40px 70px 0 70px;

        > img {
            border-radius: 30px;
        }
    }

    @media (${device.mobileL}) {
        padding: 20px;
    }
`

export const SInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`

export const SP = styled.p`
    color: ${grey};
`

export const SChapterSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 40px 70px;

    @media (${device.mobileL}) {
        padding: 20px;
    }
`

export const SCardWrap = styled.div<{i: number}>`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: ${({i}) => i%2 ? 'end' : 'start'};
    align-items: ${({i}) => i%2 ? 'end' : 'start'};
    min-width: 200px;
    min-height: 90px;
    scroll-snap-align: start;

    > * {
        pointer-events: none;
    }

    &:hover {
        > div {
            background-color: ${black};
            > span {
                color: #FFF;
            }
        }
    }

    &.active {
        > div {
            background-color: ${black};
            > span {
                color: #FFF;
            }
        }
    }

    @media (${device.mobileL}) {
        min-width: calc(100vw - 40px);
    }
`

const leftTop = css`
    top: -10px;
    left: -6.25px;
`

const rightBottom = css`
    bottom: -10px;
    right: -6.25px;
`

export const SCard = styled.div<{i: number}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 6.25px);
    height: calc(100% - 10px);
    background-color: ${lightGray};
    border-radius: 10px;
    transform-style: preserve-3d;
    transform: translateZ(1px);
    transition: 0.3s background-color;
    padding: 0 20px;

    &::before {
        content: '';
        position: absolute;
        ${({i}) => i%2 ? leftTop : rightBottom}
        width: 100%;
        height: 100%;
        border-radius: inherit;
        border: 1px solid ${grey};
        transform: translateZ(-1px);
    }

    @media (${device.mobileL}) {
        height: 80px;
    }
`

export const SChapter = styled.span`
    color: ${black};
    font-family: var(--font-cambria);
    font-size: 26px;
    transition: 0.3s color;
`

export const SServiceWrap = styled.div`
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const SService = styled.button`
    position: relative;
    width: 100%;
    min-height: 81px;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: ${black};
    border-radius: 20px;

    &.active {
        > div:nth-of-type(1) {
            &::after {
                transform: rotate(0deg);
            }
        }
    }
`

export const SPlus = styled.div`
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: '';
        position: absolute;
        height: 4px;
        width: 26px;
        background-color: #FFF;
    }

    &::after {
        content: '';
        position: absolute;
        height: 4px;
        width: 26px;
        background-color: #FFF;
        transform: rotate(90deg);
        transition: 0.3s all;
    }
`

export const SNameServise = styled.span`
    color: #FFF;
    font-family: var(--font-cambria);
    font-size: 26px;
`

export const SPlaseWrap = styled.div`
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 20px;
    background-color: ${lightGray};
    border-radius: 0 0 20px 20px;
    overflow: hidden;
`

export const SPlase = styled.div<{length: number, i: number}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 70px;
    padding: 10px 80px;
    border-bottom: ${({length, i}) => length - 1 === i ? 'none' : `1px solid ${black}`};

    @media (${device.mobileL}) {
        padding: 10px 7px;
    }
`

export const SSpan = styled.span`
    color: ${black};
    font-family: var(--font-cambria);
    font-size: 26px;
    text-align: center;
`

export const SWrap = styled.div`

    > div:nth-of-type(1) {
        height: 0;
    }

    &.active {
        > div:nth-of-type(1) {
            height: 100%;
        }
    }
`

export const SBtn = styled.button`
    max-width: 529px;
    width: 100%;
    height: 64px;
    border-radius: 100px;
    background-color: ${grey};
    color: #FFF;
    font-size: 24px;
    font-weight: 700;
`

export const SPrise = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    height: 100%;
    font-family: var(--font-cambria);
    color: ${black};
    font-size: 20px;

    @media (${device.mobileL}) {
        width: 150px;
    }
`

export const SNotes = styled.p`
    margin-top: 5px;
    width: 100%;
    min-height: 20px;
    border-radius: 4px;
    color: #FFF;
    font-size: 12px;
    background-color: ${black};
    text-align: center;
    line-height: 20px;
    padding: 0 9px;
`

export const SPriseWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const SDurationOne = styled.span`
    display: none;
    @media (${device.mobileL}) {
        display: block;
    }
`
export const SDurationTwo = styled.span`
    font-size: 26px;
    color: ${black};
    font-family: var(--font-cambria);
    white-space: nowrap;
    @media (${device.mobileL}) {
        display: none;
    }
`