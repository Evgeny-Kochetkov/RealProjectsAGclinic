import styled, { css } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey, lightGray }, device } = theme

export const SH2 = styled.h2`
    color: ${black};
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
    border: none;
    height: 1px;
    background-color: ${grey};
    width: 50%;

    @media (${device.mobileL}) {
        width:100%;
    }
`

export const SSliderWrap = styled.div`
    display: flex;  
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;

    @media (${device.mobileL}) {
        justify-content: start;
    }
`

export const Slider = styled.div`
    margin-top: 40px;
    height: 318px;
    width: calc((220px + 20px) * 5);
    overflow: hidden;

    @media (${device.mobileL}) {
        margin-right: -20px;
        height: 241px;
    }
`

export const SSliderLine = styled.div<{slides: number, slide: number}>`
    display: flex;
    gap: 20px;
    width: ${({slides}) => `calc(240px * ${slides})`};
    transform: ${({slide}) => `translateX(-${slide * 240}px)`};
    transition: all 0.5s ease 0s;

    @media (${device.mobileL}) {
        width: ${({slides}) => `calc(168px * ${slides})`};
        width: 100%;
        transform: ${({slide}) => `translateX(-${slide * 168}px)`};
        gap: 10px;
    }
`

export const SliderBlock = styled.div<{i: number}>`
    display: flex;
    width: 220px;
    height: 318px;
    justify-content: ${({i}) => i%2 ? 'start' : 'end'};
    align-items: ${({i}) => i%2 ? 'start' : 'end'};

    @media (${device.mobileL}) {
        width: 158px;
        height: 241px;
    }
`

const leftTop = css`
    top: -20px;
    left: -20px;

    @media (${device.mobileL}) {
        left: -14.36px;
    }
`

const rightBottom = css`
    bottom: -20px;
    right: -20px;

    @media (${device.mobileL}) {
        right: -14.36px;
    }
`

export const SCard = styled.div<{i: number}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 298px;
    background: ${lightGray};
    border-radius: 10px;
    padding: 20px;
    transform-style: preserve-3d;
    transform: translateZ(1px);

    &:hover {
        > img {
            -webkit-filter: grayscale(0%); 
            filter: grayscale(0%);
        }
    }

    > img {
        height: 160px;
        border-radius: 50%;
        object-fit: cover;
        -webkit-filter: grayscale(99%); 
        filter: grayscale(99%);
        transition: filter .3s ease-in-out;

        @media (${device.mobileL}) {
            height: 117px;
        }
    }

    &::before {
        content: '';
            position: absolute;
            ${({i}) => i%2 ? rightBottom : leftTop}
            width: 100%;
            height: 100%;
            border-radius: inherit;
            border: 1px solid ${grey};
            transform: translateZ(-1px);
    }

    @media (${device.mobileL}) {
        width: 143.64px;
        height: 221px;
        padding: 10px;
    }
`

export const SH3 = styled.h3`
    margin-top: 13px;
    color: ${black};
    font-family: var(--font-cambria);
    font-size: 20px;
    font-weight: 400;
    width: 100%;

    @media (${device.mobileL}) {
        margin-top: 10px;
        font-size: 16px;
    }
`

export const SP = styled.p`
    width: 100%;
    margin-top: 10px;
    color: ${grey};

    @media (${device.mobileL}) {
        margin-top: 4px;
        font-size: 14px;
    }
`

export const SArrowBtn = styled.button`
    position: relative;
    display: flex;
    width: 80px;
    height: 35px;

    @media (${device.mobileL}) {
        display: none;
    }
`

export const SArrow = styled.span`
    position: relative;
    top: 16px;
    width: 78px;
    height: 1px;
    background-color: ${grey};
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
        background-color: ${grey};
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
        background-color: ${grey}; 
        transform: rotate(-45deg);
        border-radius: inherit;
    }
`

export const SCircle = styled.span`
    box-sizing: border-box;
    position: absolute;
    right: -5px;
    bottom: 1px;
    margin: auto;
    border: 1px solid;
    border-color: transparent ${grey} ${grey};
    width: 35px;
    height: 35px;
    border-radius: 50%;
    transform-origin: center center;
    transform: rotate(-90deg);
`

export const SContentLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    height: 64px;
    width: 100%;
    border-radius: 100px;
    font-size: 24px;
    font-weight: 700;
    color: #FFF;
    background-color: ${grey};
    transition: 0.1s all;

    &:hover {
        background-color: ${black};
        color: #FFF;
        border: none;
    }
`