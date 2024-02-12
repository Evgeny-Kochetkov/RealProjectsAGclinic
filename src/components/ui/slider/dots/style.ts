import styled from 'styled-components'

import { theme } from '../../../../theme'

const { colors: { black, lightGray }, device } = theme

export const SDotsWrap = styled.div`
    display: none;

    @media (${device.mobileL}) {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 10px;
    }
`

export const SDot = styled.span`
    margin-top: 10px;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${lightGray};

    &.active {
        background: ${black};
    }
`