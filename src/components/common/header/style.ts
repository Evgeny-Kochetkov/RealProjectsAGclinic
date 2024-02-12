import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey }, device } = theme

export const SHeader = styled.header`
    display: grid;
    grid-template: 44fr 10fr 32fr / 141fr 762fr 70fr 136fr;
    grid-template-areas: 
        'logo nav address address'
        'logo nav . .'
        'logo nav . social';
    padding: 20px 70px;
    width: 100%;
    height: 126px;
    background: ${black};

    > a:first-child {
        grid-area: logo;
        width: 100%;
        height: 100%;
    }

    @media (${device.laptop}) {
        padding: 20px;
        grid-template: 44fr 10fr 32fr / 141fr 20fr 702fr 130fr 136fr;
        grid-template-areas: 
        'logo . nav address address'
        'logo . nav . .'
        'logo . nav social social';
    }

    @media (${device.tablet}) {
        display: none;
    }
`

export const SSpan = styled.span`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 20px;
    color: ${grey};
    padding: 5px 0;
`

export const SNav = styled.nav`
    position: relative;
    grid-area: nav;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 100%;
`

export const SLi = styled.li`
    position: relative;

    > a {
        > *:not(div) {
            pointer-events: none;
        }

        > span > svg > path {
            fill: white;
            opacity: 0.5;
        }
    }

    &:hover {
        > div:nth-child(2) {
            display: block;
        }

        > a > span {
            color: white;

            > svg > path {
                opacity: 1;
            }
        }
    }
`

export const SDot = styled.span`
    background: #FFF;
    width: 3px;
    height: 3px;
    border-radius: 3px;
`

export const SAddressWrap = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: address;

    > address {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: end;
        font-size: 16px;
    }
`

export const SSocialLinkWrap = styled.div`
    grid-area: social;
    display: flex;
    justify-content: end;
    align-items: end;
    gap: 30px;
`