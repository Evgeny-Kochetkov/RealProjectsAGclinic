import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black }, device } = theme

export const Scontentrap = styled.div`
    position: relative;
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;

    @media (${device.tablet}) {
        > img {
            width: 350px;
        }
    }

    @media (${device.mobileL}) {
        > img {
            display: none;
        }
    }
`

export const SH1 = styled.h1`
    margin-top: 172px;
    font-size: 0;
    margin-right: -130px;

    @media (${device.mobileL}) {
        margin-top: 0;
        > img {
            width: 300px;
            margin-left: -40px;
        }
    }
`

export const SH2 = styled.h2`
    margin-top: 60px;
    color: ${black};
    font-size: 44px;
    font-weight: 400;
    font-family: var(--font-cambria);

    @media (${device.mobileL}) {
        font-size: 30px;
        margin-top: 0;
    }
`

export const SP = styled.p`
    margin-top: 10px;
    color: ${black};
    font-family: var(--font-cambria);
    font-size: 30px;
    font-weight: 400;
    text-align: center;

    @media (${device.mobileL}) {
        font-size: 20px;
    }
`

export const SContentLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0 172px 0;
    height: 64px;
    width: 300px;
    border-radius: 100px;
    background-color: ${black};
    font-size: 24px;
    font-weight: 700;
    color: #FFF;
    transition: 0.1s all;

    &:hover {
        background-color: #FFF;
        color: ${black};
        border: 1px solid ${black};
    }

    @media (${device.mobileL}) {
        margin: 20px 0 50px 0;
    }
`

export const SHr = styled.hr`
    margin-top: 20px;
    height: 1px;
    width: 100%;
    max-width: 953px;
`