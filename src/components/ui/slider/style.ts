import styled from 'styled-components'

import { theme } from '../../../theme'

const { device } = theme

export const SSliderContainer = styled.div<{ marginTop?: string; }>`
    margin-top: ${({marginTop}) => marginTop ? marginTop : '40px'};
    /*  */
    width: 100%;
    /*  */
    @media (${device.mobileL}) {
        margin-top: 20px;
    }
`

export const SSliderWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    @media (${device.mobileL}) {
        width: calc(100vw - 40px);
    }
`

export const SSlider = styled.div<{numItemOnPage?: number; numItemOnPageLaptop?: number; numItemOnPageTablet?: number; }>`
    display: grid;
    grid-template: ${({numItemOnPage}) => numItemOnPage ? `1fr / repeat(${numItemOnPage}, 1fr)` : '1fr / 1fr 1fr 1fr 1fr'};
    gap: 20px;

    @media (${device.laptop}) {
        display: grid;
        grid-template: ${({numItemOnPageLaptop}) => numItemOnPageLaptop ? `1fr / repeat(${numItemOnPageLaptop}, 1fr)` : '1fr / 1fr 1fr 1fr'};
    }

    @media (${device.tablet}) {
        grid-template: 1fr / 1fr 1fr;
        grid-template: ${({numItemOnPageTablet}) => numItemOnPageTablet ? `1fr / repeat(${numItemOnPageTablet}, 1fr)` : '1fr / 1fr 1fr'};
    }

    @media (${device.mobileL}) {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        border-radius: 0.5rem;

        ::-webkit-scrollbar {
            width: 0;
            height: 0;
            background-color: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background-color: transparent;
        }

        :hover::-webkit-scrollbar-thumb {
            background-color: transparent;
        }
    }
`