import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, lightGray }, device } = theme

export const SCard = styled.div`
    display: flex;
    flex-direction: column;

    > img, > div > img {
        -webkit-filter: grayscale(99%); 
        filter: grayscale(99%);
        transition: filter .3s ease-in-out;
    }

    &:hover {
        -webkit-filter: grayscale(0%); 
        filter: grayscale(0%);
    }

    &:hover {
        > img, > div > img {
            -webkit-filter: grayscale(0%); 
            filter: grayscale(0%);
        }
    }
`

export const SName = styled.span`
    color: #120309;
    font-family: var(--font-cambria);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 20px;
`

export const SP = styled.p`
    color: #888184;
    font-family: var(--font-gilroy);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
`