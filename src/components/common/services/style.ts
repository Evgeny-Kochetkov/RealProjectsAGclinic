import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey }, device } = theme

export const SInfo = styled.div`
    display: flex;
    flex-direction: column;

    @media (${device.mobileL}) {
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
        opacity: 1;
    }
`

export const SP = styled.p`
    color: ${black};
    text-align: center;
    font-family: var(--font-cambria);
    font-size: 22px;
    margin-top: 20px;

    @media (${device.mobileL}) {
        color: #FFF;
        font-size: 20px;
    }
`

export const SSpan = styled.span`
    color: ${grey};
    text-align: center;
    font-family: var(--font-gilroy);
    margin-top: 10px;

    @media (${device.mobileL}) {
        color: #FFF;
        font-size: 16px;
        margin-bottom: 20px;
    }
`

export const SBtnWrap = styled.div`
    @media (${device.mobileL}) {
        display: none;
    }
`

export const SBlock = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    &:hover {
        -webkit-filter: grayscale(0%); 
        filter: grayscale(0%);
    }

    > div > img {
        -webkit-filter: grayscale(99%); 
        filter: grayscale(99%);
        transition: filter .3s ease-in-out;
        object-fit: cover;
        min-height: 310px;
        max-height: 310px;

        @media (${device.mobileL}) {
            height: 100%;
        }
    }

    &:hover {
        > div > img {
            -webkit-filter: grayscale(0%); 
            filter: grayscale(0%);
        }
    }

    @media (${device.mobileL}) {
        height: 100%;
    }
`

export const SContentLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    height: 51px;
    width: 100%;
    border-radius: 100px;
    color: ${grey};
    font-weight: 700;
    border: 1px solid ${grey};
    transition: 0.1s all;

    &:hover {
        background-color: ${grey};
        color: #FFF;
        border: none;
    }
`