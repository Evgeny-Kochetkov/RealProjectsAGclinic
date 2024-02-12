import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black }, device } = theme

export const SH1 = styled.h1`
    margin-top: 10px;
    width: 100%;
    color: ${black};
    font-family: var(--font-cambria);
    font-size: 44px;
    font-weight: 400;

    @media (${device.mobileL}) {
        margin-top: 20px;
        font-size: 32px;
    }

    @media (${device.mobileS}) {
        font-size: 30px;
    }
`

export const SBGBlock = styled.div`
    display: flex;
    padding: 0 70px 0 120px;
    width: 100%;
    background: url('/images/specialistBG.jpg') center center/cover no-repeat;
    min-height: 650px;

    @media (${device.laptop}) {
        padding: 0 70px 0 0;
    }

    @media (${device.mobileL}) {
        min-height: 483px;
        padding: 0 20px;
    }

    @media (${device.mobileM}) {
        min-height: 423px;
    }

    @media (${device.mobileS}) {
        min-height: 363px;
    }
`

export const SSpecialistContent = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: end;
    justify-content: end;

    > img {
        position: absolute;
        left: 0;
        bottom: 0;
        object-fit: contain;
        object-position: left bottom;
    }
`

export const SInfoBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: end;

    @media (${device.laptop}) {
        justify-content: end;
    }
`

export const SBlurBlock = styled.div`
    /* display: flex;
    flex-direction: column; */
    margin-top: 25px;
    border-radius: 30px;
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(13px);
    padding: 40px 20px 40px 20px;
    max-width: 681px;

    > p {
        font-size: 20px;
        font-weight: 500;
        line-height: 150%;
    }

    @media (${device.laptop}) {
        max-width: 450px;
        padding: 20px;
    }

    @media (${device.tablet}) {
        display: none;
    }
`

export const SP = styled.p`
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;

    @media (${device.laptop}) {
        font-size: 18px;
        line-height: 120%;
    }
`

export const STabButtonWrap = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    gap: 10px;
    border-radius: 100px;
    border: 1px solid #FFF;
    padding: 6px;
    margin-bottom: 20px;
    z-index: 1;

    @media (${device.mobileL}) {
        height: 52px;
        width: 100%;
        gap: 0;
    }
`

export const STabBtn = styled.button`
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding: 14px 31px 15px 32px;
    border-radius: 50px;
    height: 59px;

    &.active {
        color: ${black};
        background: #FFF;
    }

    @media (${device.mobileL}) {
        padding: 7px 7px;
        font-size: 14px;
        height: 40px;
    }

    @media (${device.mobileS}) {
        font-size: 12px;
    }
`

export const SPBlack = styled.p`
    width: 100%;
    max-width: 1300px;
    margin-top: 30px;
    color: ${black};
    line-height: 150%;

    @media (${device.mobileL}) {
        font-size: 16px;
        margin-top: 0;
    }
`

export const SUl = styled.ul`
    margin-left: 10px;
`

export const SWrap = styled.div`
    width: 100%;
    max-width: 1300px;
`

export const SLi = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${black};
`

export const SBeforeAfrerName = styled.p`
    width: 100%;
    color: ${black};
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
`

export const SDot = styled.span`
    width: 4px;
    height: 4px;
    border-radius: 4px;
    background-color: ${black};
`

export const SNoInfo = styled.div`
    width: 100%;
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
        color: ${black};
    }
`

export const SCertificate = styled.div`
    width: 100%;
    max-width: 1300px;
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
    justify-items: center;
    gap: 20px;
    margin-top: 20px;
    
    @media (${device.tablet}) {
        grid-template: 1fr / 1fr;
    }
`

export const SVideo = styled.div`
    width: 100%;
    max-width: 1300px;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    justify-items: center;
    gap: 20px;
    margin-top: 20px;
    
    @media (${device.tablet}) {
        grid-template: 1fr / 1fr;
    }
`