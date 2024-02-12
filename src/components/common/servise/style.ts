import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey }, device } = theme

export const SSection = styled.section`
    > img {
        object-fit: cover;
        object-position: center center;
    }
    @media (${device.desktopL}) {
        > img {
            min-height: 684px;
            max-height: 684px;
        }
    }

    @media (${device.laptopL}) {
        > img {
            min-height: 513px;
            max-height: 513px;
        }
    }
`

export const SPaddingWrap = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 70px;

    > .bg3 {
        display: none;

        @media (${device.mobileL}) {
            display: block;
            position: absolute;
            top: 50px;
            right: 0;
            width: 200px;
            z-index: -1;
        }
    }

    @media (${device.laptop}) {
        padding: 20px;
    }

    @media (${device.mobileL}) {
        padding: 40px 20px;
        
        > h2 {
            margin-top: 20px;
        }

        > button {
            margin-top: 40px;
        }
    }
`

export const SH2 = styled.h2`
    color: ${black};
    font-family: var(--font-cambria);
    font-size: 32px;
    font-weight: 400;
    padding: 0 3vw 10px 3vw;
    border-bottom: 1px solid ${grey};
`

export const SDesc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    color: ${black};
    line-height: 150%;
    max-width: 1300px;

    > h3 {
        display: inline-block;
        text-align: center;
        color: ${black};
        font-family: var(--font-cambria);
        font-size: 32px;
        font-weight: 400;
        padding: 0 3vw 10px 3vw;
        border-bottom: 1px solid ${grey};
    }

    > ul, ol, p {
        width: 100%;
        list-style: initial;
        padding: initial;
        margin: initial;
    }

    > ul > li {
        margin-left: 30px;
    }

    @media (${device.mobileL}) {
        font-size: 18px;
    }
`

export const SWrap = styled(SPaddingWrap)`
    background: url("/images/bg1.svg") 65% -200px / 60% 100% no-repeat, url("/images/bg2.svg") 20% 500px / 30% 100% no-repeat;

    @media (${device.mobileL}) {
        background: none;
    }
`