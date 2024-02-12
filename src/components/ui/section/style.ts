import styled from 'styled-components'

import { theme } from '../../../theme'

const { device } = theme

export const SSection = styled.section<{bg?: string}>`
    background: ${({bg}) => bg ? bg : 'none'};
`

export const SGlobalWrap = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 70px;
    max-width: 1440px;
    min-height: 393px;

    > .bg1 {
        position: absolute;
        top: 0;
        right: 70px;
        width: 300px;
        z-index: -1;

        @media (${device.mobileL}) {
            display: none;
        }
    }

    > .bg2 {
        position: absolute;
        top: 0;
        right: 180px;
        width: 267px;
        z-index: -1;

        @media (${device.mobileL}) {
            display: none;
        }
    }

    > .bg3 {
        position: absolute;
        top: 0;
        right: 180px;
        width: 267px;
        z-index: -1;

        @media (${device.mobileL}) {
            top: 40px;
            right: 0;
            width: 180px;
        }
    }

    > .bg4 {
        position: absolute;
        top: 0;
        right: 280px;
        width: 320px;
        z-index: -1;

        @media (${device.mobileL}) {
            top: 70px;
            right: 0;
            width: 200px;
        }
    }

    @media (${device.laptop}) {
        padding: 20px;
    }

    @media (${device.mobileL}) {
        padding: 40px 20px;
    }
`