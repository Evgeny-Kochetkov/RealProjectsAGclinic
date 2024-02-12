import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { grey, black }, device } = theme

export const SH3 = styled.h3`
    margin-top: 90px;
    font-family: var(--font-cambria);
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 260px;
    @media (${device.mobileL}) {
        margin-top: 50px;
        text-align: center;
    }
`

export const SFormContent = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 40px;
    @media (${device.mobileL}) {
        margin-top: 0px;
    }
`

export const SLabel = styled.label`
    color: black;
    font-family: var(--font-gilroy);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`

export const SInput = styled.input`
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid ${black};
    height: 46px;
    padding: 0 20px;
`

export const SButton = styled.button<{background?: string, border?: string, marginTop?: string, color?: string}>`
    margin-top: ${({marginTop}) => marginTop ? marginTop : null};
    height: 64px;
    border-radius: 100px;
    border: ${({border}) => border ? border : '1px solid #FFF'};
    font-size: 24px;
    font-weight: 700;
    color: ${({color}) => color ? color : '#FFF'};
    background: ${({background}) => background ? background : 'transparent'};
    margin-bottom: 10px;

    @media (${device.mobileS}) {
        width: 280px;
    }
`

export const STextContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    color: ${black};
`

export const SSvgdiv = styled.div`
    position: absolute;
    width: 350.609px;
    height: 100%;
    top: 30px;
    right: 20%;
    bottom: 0;
    background: url('/images/bg6.png') bottom / 120% no-repeat;
    z-index: -1;

    @media(${device.tablet}){
        right: initial;
        left: 0;
    }

    @media(${device.mobileL}){
        height: 370px;
        top: 80px;
        left: initial;
        right: -15px;
        background: url('/images/bg4.png') right bottom / 30% no-repeat;
        z-index: initial;
    }
`

export const SPForm = styled.p`
    width: 60%;
    color: #120309;
    font-family: var(--font-gilroy);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    padding-top: 20px;

    @media (${device.laptopL}) {
        width:85%;
    }

    @media (${device.mobileL}) {
        width:100%;
        text-align: center;
    }

    >h2{
        color: #888184;
        font-family: var(--font-gilroy);
        font-size: 18px;
        font-style: normal;
        line-height: normal;
        font-weight: 700;
        margin: 20px 0;
    }

    >span{
        float: right;
        >span{
            font-weight: 600;
        }
    }
`