import styled, { css } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey, lightGray }, device } = theme

export const SWrap = styled.div<{i: number}>`
    display: flex;
    justify-content: ${({i}) => i%2 ? 'start' : 'end'};
    align-items: ${({i}) => i%2 ? 'start' : 'end'};
`

const leftTop = css`
    top: -20px;
    left: -20px;
`

const rightBottom = css`
    bottom: -20px;
    right: -20px;
`

export const SCard = styled.div<{i: number}>`
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    display: grid;
    grid-template: 1fr / 2fr 3fr;
    gap: 130px;
    background: ${lightGray};
    border-radius: 10px;
    padding: 20px;
    transform-style: preserve-3d;
    transform: translateZ(1px);
    padding: 30px;

    &::before {
        content: '';
        position: absolute;
        ${({i}) => i%2 ? rightBottom : leftTop}
        width: 100%;
        height: 100%;
        border-radius: inherit;
        border: 1px solid ${grey};
        transform: translateZ(-1px);
    }

    @media (${device.mobileL}) {
        grid-template: 1fr / 1fr;
        padding: 20px;
    }
`

export const SImgBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media (${device.mobileL}) {
        display: none;
    }
`

export const SP = styled.p`
    color: ${grey};
    text-align: center;
    font-size: 16px;
    max-width: 208px;
`

export const SA = styled.a`
    color: ${black};
    font-size: 16px;
    font-weight: 700;
`

export const SH3 = styled.h3`
    color: ${black};
    font-family: var(--font-cambria);
    font-size: 28px;
    font-weight: 400;

    @media (${device.mobileL}) {
        font-size: 22px;
    }
`

export const SUlWrap = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 30px;
`

export const SInfoBlock = styled.div`
    display: none;

    @media (${device.mobileL}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 100%;
    }
`

export const SDesc = styled.div`
    color: ${grey};

    @media (${device.mobileL}) {
        > * {
            max-width: calc(100vw - 90px);
        }
    }
    
    > ul {
        padding-left: 40px;

        @media (${device.mobileL}) {
            padding-left: 20px;
        }
        
        > li {
            position: relative;
            overflow-wrap: break-word;
            hyphens: auto;
            &::before {
                content: '';
                position: absolute;
                left: -20px;
                top: 50%;
                transform: translateY(-50%);
                background: ${grey};
                width: 5px;
                height: 5px;
                border-radius: 100%;
            }

            @media (${device.mobileL}) {
                &::before {
                    left: -15px;
                }
            }
        }
    }
`

export const SNoItems = styled.p`
    margin-top: 40px;
    color: ${black};
    font-size: 24px;
    text-align: center;

    @media (${device.mobileL}) {
        margin-top: 20px;
        font-size: 18px;
    }
`