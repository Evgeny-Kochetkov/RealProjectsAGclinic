import styled from 'styled-components'

import { theme } from '../../../../theme'

const { colors: { black, grey }, device } = theme

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