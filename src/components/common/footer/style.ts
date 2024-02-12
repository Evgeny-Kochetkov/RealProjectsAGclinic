import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black }, device } = theme

export const SFooter = styled.footer`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    background: ${black};
    padding: 30px 70px;

    @media (${device.laptop}) {
        padding: 20px;
    }

    @media (${device.mobileL}) {
        height: 100%;
        padding: 30px 20px 20px 20px;
    }
`

export const SWrapFooter = styled.div`
    display: flex;
    justify-content: space-between;

    @media (${device.mobileL}) {
        flex-direction: column;
    }
`

export const SInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (${device.mobileL}) {
        > a:nth-child(1) {
            display: flex;
            justify-content: center;
        }

        &:nth-child(3) {
            align-items: center;
        }
    }
`

export const SInfoWrap = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;

    @media (${device.mobileL}) {
        font-size: 16px;
        padding-left: 60px;
    }

    @media (${device.mobileM}) {
        padding-left: 40px;
    }

    @media (${device.mobileS}) {
        padding-left: 20px;
    }
`

export const SPhone = styled.a`
    font-weight: 700;
`

export const SBold = styled.a`
    margin-left: 4px;
    font-weight: 700;
`

export const SUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (${device.mobileL}) {
        padding: 40px 0;
        justify-content: center;

        > li {
            text-align: center;
        }
    }
`

export const SP = styled.p`
    font-size: 25px;
    font-family: var(--font-cambria);
    font-weight: 700;
    line-height: 125%;
    max-width: 179px;

    @media (${device.mobileL}) {
        text-align: center;
    }
`

export const SInput = styled.input`
    height: 46px;
    background: transparent;
    border-radius: 10px;
    border: 1px solid #FFF;
    color: #FFF;
    padding: 0 20px;

    &::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
`

export const SForm = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 300px;

    @media (${device.mobileS}) {
        width: 280px;
    }
`

export const SSocialLinkWrap = styled.div`
    display: flex;
    justify-content: end;
    gap: 20px;

    @media (${device.mobileL}) {
        margin-top: 40px;
        justify-content: center;
    }
`

export const SBottomFooter = styled.div`
    display: flex;
    justify-content: space-between;

    @media (${device.mobileL}) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
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

export const SPhonesWrap = styled.div`
    display: flex;
    flex-direction: column;
`

export const SPolicy = styled.p`
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media (${device.mobileL}) {
        text-align: center;
    }
`

export const SH3 = styled.h3`
    font-size: 25px;
    font-family: var(--font-cambria);
    font-weight: 700;
`