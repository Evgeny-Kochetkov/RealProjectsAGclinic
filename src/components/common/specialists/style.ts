import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, lightGray }, device } = theme

export const SBlock = styled.div`
    position: relative;

    &:hover {
        -webkit-filter: grayscale(0%); 
        filter: grayscale(0%);

        > div {
            opacity: 1;
        }
    }

    > img {
        -webkit-filter: grayscale(99%); 
        filter: grayscale(99%);
        transition: filter .3s ease-in-out;
    }

    &:hover {
        > img {
            -webkit-filter: grayscale(0%); 
            filter: grayscale(0%);
        }
    }
`

export const SInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: center;
    font-family: var(--font-cambria);
    font-size: 20px;
    position: absolute;
    width: 100%;
    bottom: 0;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    background: linear-gradient(180deg, rgba(18, 3, 9, 0.00) 0.06%, #120309 99.94%);
    height: 120px;
    border-radius: 10px;

    @media (${device.mobileL}) {
        opacity: 1;
    }
`

export const SSliderWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 40px;

    @media (${device.mobileL}) {
        margin-top: 30px;
    }
`

export const Slider = styled.div`
    overflow: hidden;

    @media (${device.mobileL}) {
        margin-right: -20px;
    }
`

export const SDotsWrap = styled.div`
    display: none;

    @media (${device.mobileL}) {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 10px;
    }
`

export const SDot = styled.span`
    margin-top: 10px;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${lightGray};

    &.active {
        background: ${black};
    }
`