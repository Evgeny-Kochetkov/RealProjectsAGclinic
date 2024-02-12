import styled, { css } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { black, grey, lightGray }, device } = theme

export const SPartnersWrap = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    justify-items: center;

    > a > img {
        object-fit: contain;
    }

    @media (${device.tablet}) {
        grid-template: 1fr / 1fr;
    }

    @media (${device.mobileL}) {
        grid-row-gap: 0;
        grid-column-gap: 0;
    }
`