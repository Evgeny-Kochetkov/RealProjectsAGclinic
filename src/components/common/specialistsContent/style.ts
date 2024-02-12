import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey }, device } = theme

export const SInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const SBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    flex: 1 0 100%;
    scroll-snap-align: start;
    border-radius: 10px;
    overflow: hidden;

    &:hover {
        -webkit-filter: grayscale(0%); 
        filter: grayscale(0%);
    }

    > img {
        width: 100%;
        -webkit-filter: grayscale(99%); 
        filter: grayscale(99%);
        transition: filter .3s ease-in-out;
        object-fit: cover;
    }

    &:hover {
        > img {
            -webkit-filter: grayscale(0%); 
            filter: grayscale(0%);
        }
    }
`

export const SName = styled.p`
    color: ${black};
    font-family: var(--font-cambria);
    font-size: 22px;
    margin-top: 20px;

    @media (${device.mobileL}) {
        font-size: 20px;
    }
`

export const SSpeciality = styled.span`
    color: ${black};
    font-family: var(--font-gilroy);
    margin-top: 8px;

    @media (${device.mobileL}) {
        font-size: 16px;
    }
`

export const SDesc = styled.span`
    color: ${grey};
    font-family: var(--font-gilroy);
    margin-top: 8px;
    width: 70%;

    @media (${device.mobileL}) {
        font-size: 16px;
    }
`