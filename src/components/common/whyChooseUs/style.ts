import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey, lightGray }, device } = theme

export const SWhyChooseUsWrap = styled.div`
    display: flex;
    justify-content: center;
    gap: 43px;

    @media (${device.tablet}) {
        flex-direction: column;
        align-items: center;
    }
`

export const SWrap = styled.div`
    display: flex;
    align-items: end;
`

export const SWhyChooseUsBlock = styled.div`
    max-width: 817px;
    width: 100%;
    max-height: 493px;
    height: 100%;
    border-radius: 200px 0 200px 0;
    padding: 67px 57px;
    background: ${lightGray};
    transform-style: preserve-3d;
    transform: translateZ(1px);

    &::before {
        content: '';
        position: absolute;
        top: -20px;
        right: -20px;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        border: 1px solid ${grey};
        transform: translateZ(-1px);
    }

    @media (${device.laptop}) {
        border-radius: 100px 0 100px 0;
    }

    @media (${device.tablet}) {
        max-height: none;
        padding: 40px 17px;
        width: calc(100% - 8px);

        &::before {
            right: -8px;
        }
    }
`

export const SImgBlock = styled.div`
    position: relative;

    > img {
        height: 513px;
        width: auto;

        @media (${device.tablet}) {
            height: 400px;
        }
    }

    > a {
        position: absolute;
        max-width: 300px;
        width: 100%;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);

        @media (${device.mobileS}) {
            max-width: 240px;
        }
    }
`

export const SHr = styled.hr`
    margin-top: 10px;
    border: none;
    height: 1px;
    background-color: ${grey};
    width: 100%;
`

export const SPCenter = styled.p`
    color: ${black};
    text-align: center;
    margin-top: 20px;

    @media (${device.tablet}) {
        font-size: 16px;
    }
`

export const SP = styled.p`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 30px;
    color: ${black};

    @media (${device.tablet}) {
        font-size: 16px;
        align-items: start;
    }
`

export const SSuccessesInNum = styled.div`
    margin-top: 20px;
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 80px;
    max-width: 1300px;
    width: 100%;
    height: 320px;
    background: url('/images/bg1.svg') 75px 0 / 484px 100% no-repeat, url('/images/bg2.svg') calc(100% - 200px) 20px / 222px 241px no-repeat;

    @media (${device.laptop}) {
        gap: 50px;
    }

    @media (${device.laptop}) {
        gap: 20px;
    }

    @media (${device.tablet}) {
        flex-direction: column;
        gap: 20px;
        height: 100%;
        margin-top: 20px;
        background: url('/images/bg3.svg') 80% bottom / 110% 60% no-repeat, url('/images/bg2.svg') right -53% / 60% 70% no-repeat;
    }
`

export const SNumBlock = styled.div`
    margin-top: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */

    @media (${device.tablet}) {
        
    }

    @media (${device.tablet}) {
        min-width: 100%;
        align-items: center;

        > p {
            text-align: center;
        }
    }
`

export const SNum = styled.span`
    color: ${grey};
    font-family: var(--font-cambria);
    font-size: 120px;
`

export const SContentLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    height: 64px;
    width: 100%;
    border-radius: 100px;
    border: 1px solid ${black};
    font-size: 24px;
    font-weight: 700;
    color: ${black};
    transition: 0.1s all;

    &:hover {
        background-color: ${black};
        color: #FFF;
        border: none;
    }
`