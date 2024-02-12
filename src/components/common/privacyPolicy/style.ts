import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black }, device } = theme

export const SP = styled.p`
    color: ${black};
`

export const SPolicy = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (${device.mobileL}) {
        margin-top: 20px;
        gap: 15px;
    }
`