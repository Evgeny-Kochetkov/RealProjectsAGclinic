import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, lightGray }, device } = theme

export const SBlock = styled.div`
    position: relative;

    &:hover {
        -webkit-filter: grayscale(0%);
        filter: grayscale(0%);
    }

    > img {
        -webkit-filter: grayscale(99%); 
        filter: grayscale(99%);
        transition: filter .3s ease-in-out;
        object-fit: cover;
        object-position: center top;
    }

    &:hover {
        > img {
            -webkit-filter: grayscale(0%);
            filter: grayscale(0%);
        }

        > div > p {
            display: block;
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
    padding: 20px 0;
    transition: opacity .3s ease-in-out;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(18, 3, 9, 0.00) 0.06%, #120309 99.94%);
    border-radius: 10px;
`

export const SSliderWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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

export const SInput = styled.input`
    margin-top: 40px;
    height: 46px;
    max-width: 970px;
    width: 100%;
    background: transparent;
    border-radius: 10px;
    border: 1px solid ${black};
    color: ${black};
    padding: 0 20px 0 60px;
    background: url('/images/search.svg'), #FFF;
    background-repeat: no-repeat;
    background-position: 20px center;

    &::placeholder {
        color: rgba(18, 3, 9, 0.50);
    }
`

export const SP = styled.p`

`

export const SDesc = styled.p`
    display: none;
`