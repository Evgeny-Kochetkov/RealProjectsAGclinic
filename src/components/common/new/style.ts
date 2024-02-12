import styled, { css } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey, lightGray }, device } = theme

export const SBlock = styled.div<{i: number}>`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: ${({i}) => i%2 ? 'end' : 'start'};
    align-items: ${({i}) => i%2 ? 'start' : 'end'};
`

const leftBottom = css`
    bottom: -10px;
    left: -10px;
`

const rightTop = css`
    top: -10px;
    right: -10px;
`

export const SCard = styled.div<{i: number}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    background: ${lightGray};
    border-radius: 10px;
    transform-style: preserve-3d;
    transform: translateZ(1px);
    padding-bottom: 30px;

    &::before {
        content: '';
            position: absolute;
            ${({i}) => i%2 ? leftBottom : rightTop}
            width: 100%;
            height: 100%;
            border-radius: inherit;
            border: 1px solid ${grey};
            transform: translateZ(-1px);
            z-index: 1;
    }

    > div > img {
        width: 100%;
        -webkit-filter: grayscale(99%); 
        filter: grayscale(99%);
        transition: filter .3s ease-in-out;
    }

    &:hover {
        > div > img {
            -webkit-filter: grayscale(0%); 
            filter: grayscale(0%);
        }
    }
`

export const SImgWrap = styled.div`
    position: relative;
    width: 100%;
`

export const SName = styled.p`
    text-align: center;
    font-family: var(--font-cambria);
    font-size: 20px;
    position: absolute;
    width: 100%;
    bottom: 20px;
    padding: 0 10px;
`

export const SP = styled.p`
    color: ${black};
    font-size: 16px;
    padding: 0 10px;
`