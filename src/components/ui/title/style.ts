import styled, { css } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey, lightGray }, device } = theme

export const SH1 = styled.h1`
    color: ${black};
    font-family: var(--font-cambria);
    font-size: 44px;
    font-weight: 400;
    text-align: center;

    @media (${device.mobileL}) {
        margin-top: 20px;
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