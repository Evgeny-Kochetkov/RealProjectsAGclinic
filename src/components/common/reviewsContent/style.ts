import styled, { css } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey, lightGray }, device } = theme

export const SAvatarWrap = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SReviews = styled.div<{i: number}>`
    display: flex;
    justify-content: ${({i}) => i%2 ? 'end' : 'start'};
    align-items: ${({i}) => i%2 ? 'start' : 'end'};
    width: 100%;
`

const leftBottom = css`
    bottom: -20px;
    left: -20px;

    @media (${device.mobileL}) {
        left: -14.36px;
    }
`

const rightTop = css`
    top: -20px;
    right: -20px;

    @media (${device.mobileL}) {
        right: -14.36px;
    }
`

export const SCard = styled.div<{i: number}>`
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${lightGray};
    border-radius: 10px;
    padding: 20px;
    transform-style: preserve-3d;
    transform: translateZ(1px);

    > img {
        position: absolute;
        top: -100px;
        border-radius: 100px;
        z-index: 10;
        object-fit: cover;
    }

    &::before {
        content: '';
        position: absolute;
        ${({i}) => i%2 ? leftBottom : rightTop}
        width: 100%;
        height: 100%;
        border-radius: inherit;
        border: 1px solid ${grey};
        transform: translateZ(-1px);
    }
`

export const SName = styled.span`
    display: block;
    margin-top: 100px;
    text-align: center;
    font-family: var(--font-cambria);
    font-size: 20px;
    color: ${black};
`

export const SComment = styled.blockquote`
    margin-top: 10px;
    color: ${grey};
    text-align: center;
    font-family: var(--font-gilroy);
    font-size: 16px;
    margin-bottom: 20px;
`

export const SWrap = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 640px;
    height: 704px;
    border-radius: 30px;
    background: #FFF;
    padding: 40px;

    > form {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    @media (${device.mobileL}) {
        height: 644px;
        padding: 40px 10px;
    }
`

export const SCloseBtn = styled.button`
    position: absolute;
    top: -20px;
    right: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 100px;
    background: ${black};
`

export const SInput = styled.input`
    margin-top: 36px;
    height: 46px;
    width: 100%;
    background: transparent;
    border-radius: 10px;
    border: 1px solid ${black};
    color: ${black};
    padding: 0 20px;
    max-height: 325px;

    &::placeholder {
        color: rgba(18, 3, 9, 0.50);
    }

    @media (${device.mobileL}) {
        margin-top: 20px;
    }

    .error {
        border: 1px solid #EB5757;
    }
`

export const STextareaContainer = styled.div`
    margin-top: 20px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid ${black};
    max-height: 325px;
    width: 100%;
    height: 100%;
`

export const STextarea = styled.textarea`
    resize: none;
    color: ${black};
    padding: 10px;
    display: block;
    width: 100%;
    height: 100%;
    outline: none;
    box-sizing: border-box;
    /* scrollbar-color: #126D11 rgba(0, 0, 0, 0.30); */
    scrollbar-width: 4px;
    scroll-margin-right: 10px;

    ::-webkit-scrollbar {
        background-color: #DADADA;
        width: 10px;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        padding: 0 2px;
        border-right:2px solid transparent;
        border-left:2px solid transparent;
        background-color: ${grey};
        background-clip: padding-box;
        border-radius: 10px;
    }
`

export const SLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    cursor: pointer;
    width: 220px;
`

export const SSpan = styled.span`
    color: ${black};
`

export const SBtnWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const SButton = styled.button<{marginTop: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${({marginTop}) => marginTop};
    height: 64px;
    max-width: 300px;
    width: 100%;
    border-radius: 100px;
    font-size: 24px;
    font-weight: 700;
    color: #FFF;
    background-color: ${grey};
    transition: 0.1s all;

    &:hover {
        background-color: ${black};
        color: #FFF;
        border: none;
    }
`