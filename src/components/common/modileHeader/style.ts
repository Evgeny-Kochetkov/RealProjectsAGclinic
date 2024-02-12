import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black }, device } = theme

export const SMobileHeader = styled.header`
    display: none;

    @media (${device.tablet}) {
        position: relative;
        display: flex;
        flex-direction: column;
        background: ${black};
        position: fixed;
        top: 0;
        left: 0;
        z-index: 30;
        height: 162px;
        width: 100%;
    }
`

export const SWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px 0 20px;
`

export const SSocialWrap = styled.div`
    display: flex;
    justify-content: end;
    gap: 20px;

    @media (${device.mobileM}) {
        gap: 10px;
    }
`

export const SHamburger = styled.button`
    position: relative;
    grid-area: hamburger;
    display: grid;
    grid-template: 1fr 1fr 1fr / 1fr;
    align-items: center;
    justify-items: end;
    width: 40px;
    height: 40px;
    padding: 8px 5px;

    > span {
        display: block;
        height: 3px;
        border-radius: 3px;
        background-color: #FFF;
    }
    

    > span:nth-child(1) {
        width: 30px;
    }

    > span:nth-child(2) {
        width: 17px;
    } 

    > span:nth-child(3) {
        width: 30px;
    }

    &.active {
        > span:nth-child(1) {
            transform: translateY(8px) rotate(-45deg);
        }

        > span:nth-child(2) {
            display: none;
        } 

        > span:nth-child(3) {
            transform: rotate(45deg);
        }
    } 
`

export const SMenu = styled.div<{show: boolean}>`
    position: absolute;
    top: 0;
    display: flex;
    right: ${({show}) => show ? '0' : '-100%'};
    flex-direction: column;
    background: ${black};
    width: 100vw;
    height: 100vh;
    transition: 0.3s all;
`

export const SUl = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 30px;
    height: calc(100vh - 182px);
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow: -moz-scrollbars-none;
`

export const SLi = styled.li`
    font-size: 28px;
`

export const SButton = styled.button`
    display: flex;
    align-items: center;
    text-align: start;
    gap: 10px;
    color: #FFF;
`

export const SCategory = styled.div<{show: boolean}>`
    position: absolute;
    top: 66px;
    right: ${({show}) => show ? '0' : '-100%'};
    height: calc(100vh - 66px);
    width: 100vw;
    background: ${black};
    transition: 0.3s all;
`

export const SBack = styled.button`
    margin: 20px 0 20px 20px;
    display: flex;
    align-items: center;
    gap: 4px;
    color: #FFF;
    font-size: 18px;
`