import styled, { css } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey, lightGray }, device } = theme

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

export const SWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 640px;
    max-height: 528px;
    border-radius: 30px;
    background: #FFF;
    padding: 40px;

    > form {
        display: flex;
        flex-direction: column;
        align-items: center;
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
    margin-top: 20px;
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
        font-size: 14px;
        margin-top: 20px; 

        &::placeholder {
            font-size: 14px;
        }
    }
`