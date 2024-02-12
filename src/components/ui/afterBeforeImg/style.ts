import styled, { css } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey, lightGray }, device } = theme

export const SBeforeAfterSlider = styled.div<{width: number}>`
    position: relative;
    height: 380px;
    width: ${({width}) => `${width}px`};
    border-radius: 10px;
    overflow: hidden;
`

export const SBefore = styled.div<{width: number, img: string}>`
    width: ${({width}) => `${width}px`};
    height: 100%;
    position: absolute;
    z-index: 1;
    background-image: ${({ img }) => `url(${img})`};
    background-repeat: no-repeat;
    background-position: left;
    background-size: auto 100%;

    @media (${device.mobileS}) {
        background-position: -10px;
    }
`

export const SAfter = styled.div<{img: string}>`
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: ${({ img }) => `url(${img})`};
    background-repeat: no-repeat;
    background-position: left;
    background-size: auto 100%;

    @media (${device.mobileS}) {
        background-position: -10px;
    }
`

export const SResize = styled.div`
    width: 3px;
    height: 100%;
    position: absolute;
    right: -1.5px;
    top: 0;
    background-color: #FFF;
`

export const SResizeCircle = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 76px;
    height: 76px;
    background-color: #FFF;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    cursor: e-resize;
`

export const SContainer = styled.div<{position: number}>`
    display: grid;
    place-content: center;
    position: relative;
    overflow: hidden;
    border-radius: 1rem;

`

export const SImageContainer = styled.div`
    max-width: 800px;
    max-height: 90vh;
    aspect-ratio: 1/1;
`

export const SSlider = styled.div`
    position: absolute;
    inset: 0;
    cursor: pointer;
    opacity: 0;
    width: 100%;
    height: 100%;
`

export const SSliderLine = styled.div<{position: number}>`
    position: absolute;
    inset: 0;
    width: .2rem;
    height: 380px;
    background-color: #fff;
    /* z-index: 10; */
    left: ${({position}) => `${position}%`};
    transform: translateX(-50%);
    pointer-events: none;
`

export const SSliderButton = styled.div<{position: number}>`
    position: absolute;
    background-color: #fff;
    color: black;
    padding: .5rem;
    border-radius: 100vw;
    display: grid;
    place-items: center;
    top: 50%;
    left: ${({position}) => `${position}%`};
    transform: translate(-50%, -50%);
    pointer-events: none;
    /* z-index: 100; */
    box-shadow: 1px 1px 1px hsl(0, 50%, 2%, .5);
`