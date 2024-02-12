import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { grey, black }, device } = theme

export const SH1 = styled.h1`
    color: #120309;
    font-family: var(--font-cambria);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
    @media (${device.tablet}) {
        text-align: center;
    }
`

export const SHr = styled.hr`
    margin-top: 10px;
    border: none;
    height: 1px;
    background-color: ${grey};
    width: 50%;

    @media (${device.laptopL}) {
        width:85%;
    }

    @media (${device.mobileL}) {
        width:100%;
    }
`

export const SDate = styled.span`
    color: ${grey};
    font-weight: 600;
`

export const SAuthor = styled.span`
    color: ${grey};
    >span{
        font-weight: 600;
    }
`

export const SDesc = styled.p`
    margin-top: 20px;
    max-width: 860px;
    color: ${grey};

    >h5{
        color: #888184;
        font-family: var(--font-gilroy);
        font-size: 18px;
        font-style: normal;
        line-height: normal;
        font-weight: 700;
    }
`

export const SFoterDescription = styled.p`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    max-width: 860px;
    width: 100%;
    margin-bottom: 65px;
`