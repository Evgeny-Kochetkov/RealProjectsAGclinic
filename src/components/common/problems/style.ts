import styled, { css } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { grey }, device } = theme

export const SBlock = styled.div<{i: number}>`
    display: flex;
    width: 100%;
    height: 275px;
    justify-content: ${({i}) => i%2 ? 'end' : 'start'};
    align-items: ${({i}) => i%2 ? 'start' : 'end'};

    @media (${device.mobileL}) {
        max-width: 157.5px;
        height: 194px;
    }

    @media (${device.mobileS}) {
        width: 130px;
        height: 160px;
    }
`

const leftBottom = css`
    bottom: -10px;
    left: -10px;

    @media (${device.mobileL}) {
        bottom: -6.95px;
        left: -5.27px;
    }
`

const rightTop = css`
    top: -10px;
    right: -10px;

    @media (${device.mobileL}) {
        top: -6.95px;
        right: -5.27px;
    }
`

export const SCard = styled.div<{i: number}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    border-radius: 10px;
    transform-style: preserve-3d;
    transform: translateZ(1px);

    &::before {
        content: '';
        position: absolute;
        ${({i}) => i%2 ? leftBottom : rightTop}
        width: 100%;
        height: 100%;
        border-radius: inherit;
        border: 1px solid ${grey};
        transform: translateZ(-1px);
        /* z-index: -1; */
    }

    > img {
        -webkit-filter: grayscale(99%); 
        filter: grayscale(99%);
        transition: filter .3s ease-in-out;
        border-radius: 10px;
    }

    &:hover {
        > img {
            -webkit-filter: grayscale(0%); 
            filter: grayscale(0%);
        }
    }

    @media (${device.mobileL}) {
        > img {
            min-height: 100% !important;
            object-fit: cover;
        }
    }
`

export const SImgFrame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const SProblemName = styled.p`
    text-align: center;
    font-family: var(--font-cambria);
    font-size: 20px;
    position: absolute;
    width: 100%;
    bottom: 20px;

    @media (${device.mobileL}) {
        font-size: 18px;
    }
`