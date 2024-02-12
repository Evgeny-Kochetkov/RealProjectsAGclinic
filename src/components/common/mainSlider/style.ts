import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey }, device } = theme

export const SMainSlider = styled.section`
    height: calc(100vh - 126px);

    @media (${device.tablet}) {
        margin-top: 162px;
        height: calc(100vh - 162px);
    }
`

export const SSliderWrap = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    height: calc(100vh - 126px);
`

export const SSliderLine = styled.div<{slide: number; banners: number}>`
    width: ${({banners}) => `${banners + '00vw'}`};
    display: flex;
    transition: all 0.5s ease 0s;
    transform: ${({slide}) => `translateX(-${slide + '00vw'})`};
    height: calc(100vh - 126px);
`

export const SliderBlock = styled.div`
    position: relative;
    width: 100vw;
    height: calc(100vh - 126px);

    @media (${device.tablet}) {
        height: calc(100vh - 162px);
    }
`

export const SVideoBackground = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    > video {
        width: 100vw;
        height: 100%;
        z-index: -1;
        will-change: transform;

        @media (${device.mobileL}) {
            height: 100vh;
            width: auto;
        }
    }
`

export const SContentSlide = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 78px 0 61px 0;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    > a {
        position: absolute;
        top: 39px;
        left: 70px;
    }

    @media (${device.tablet}) {
        padding: 0 0 95px 0;
        > a {
            top: 20px;
            left: 20px;
        }
    }
`

export const STitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (${device.tablet}) {
        justify-content: center;
    }
`

export const SH1 = styled.h1`
    font-family: var(--font-cambria);
    font-size: 100px;
    font-weight: 400;

    @media (${device.tablet}) {
        font-size: 70px;
        text-align: center;
    }

    @media (${device.mobileL}) {
        font-size: 50px;
    }
`

export const SP = styled.p`
    font-family: var(--font-gilroy);
    font-size: 24px;
    font-style: italic;
    font-weight: 300;

    @media (${device.tablet}) {
        font-size: 20px;
        text-align: center;
    }

    @media (${device.mobileL}) {
        font-size: 18px;
    }

    @media (${device.mobileS}) {
        font-size: 16px;
    }
`

export const SArrowsWrap = styled.div`
    position: absolute;
    display: flex;
    gap: 20px;
    bottom: 40px;
    right: 70px;
    z-index: 10;

    @media (${device.tablet}) {
        right: 50%;
        transform: translateX(50%);
    }
`

export const SArrowBtn = styled.button`
    position: relative;
    display: flex;
    width: 40px;
    height: 35px;
`

export const SArrow = styled.span<{slide: number}>`
    position: relative;
    top: 16px;
    width: 38px;
    height: 1px;
    background-color: ${({slide}) => slide > 0 ? 'black' : '#FFF'};
    left: 0;
    display: block;
    border-radius: 2px;

    &::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 1px;
        top: -3px;
        right: -3px;
        background-color: ${({slide}) => slide > 0 ? 'black' : '#FFF'};
        transform: rotate(45deg);
        border-radius: inherit;
    }

    &::before {
        content: '';
        position: absolute;
        width: 10px;
        height: 1px;
        top: 3px;
        right: -3px;
        background-color: ${({slide}) => slide > 0 ? 'black' : '#FFF'}; 
        transform: rotate(-45deg);
        border-radius: inherit;
    }
`

export const SCircle = styled.span<{slide: number}>`
    display: none;
    box-sizing: border-box;
    position: absolute;
    left: 12px;
    bottom: 1px;
    margin: auto;
    border: 1px solid;
    border-color: ${({slide}) => slide > 0 ? 'transparent black black' : 'transparent #FFF #FFF'};
    width: 35px;
    height: 35px;
    border-radius: 50%;
    transform-origin: center center;
    transform: rotate(-90deg);

    &.active {
        display: block;
    }
`

export const SSlide = styled.div<{bg: string, bgMob: string}>`
    width: 100%;
    height: 100%;
    background: ${({bg}) => `url(${bg}) center center/contain no-repeat`};

    @media (${device.mobileL}) {
        background: ${({bgMob}) => `url(${bgMob}) center center/contain no-repeat, #F8F8F8`};
    }
`

export const SButton = styled.button`
    height: 64px;
    max-width: 300px;
    width: 100%;
    border-radius: 100px;
    font-size: 24px;
    font-weight: 700;
    color: #FFF;
    border: 1px solid #FFF;
    transition: 0.1s all;

    &:hover {
        background-color: #FFF;
        color: #120309;
        border: none;
    }
`