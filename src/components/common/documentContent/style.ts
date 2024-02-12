import styled, { css } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey } } = theme

export const SDocument = styled.div`
    > img {
        height: auto;
    }
`

export const SName = styled.span`
    display: block;
    margin-top: 10px;
    color: ${black};
    text-align: center;
    font-family: var(--font-cambria);
    font-size: 20px;
    font-weight: 700;
`

export const SDesc = styled.p`
    margin-top: 10px;
    color: ${grey};
    text-align: center;
    font-family: var(--font-gilroy);
    font-size: 16px;
`

export const SModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(18, 3, 9, 0.50);
    backdrop-filter: blur(5px);
    z-index: 50;
    padding: 60px 20px;
`

export const SImgWrap = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
        max-height: 90vh;
    }
`

const rightTop = css`
    top: 20px;
    right: 20px;
`

const rightCenter = css`
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
`

const leftCenter = css`
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
`

export const SWrapBtn = styled.button<{position: 'rightTop' | 'rightCenter' | 'leftCenter'}>`
    ${({position}) => {
        switch(position) {
            case 'rightTop': 
                return rightTop
            case 'rightCenter':
                return rightCenter
            case 'leftCenter':
                return leftCenter
        }
    }};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: #FFF;
    border-radius: 10px;
    border: 1px solid ${grey};
`