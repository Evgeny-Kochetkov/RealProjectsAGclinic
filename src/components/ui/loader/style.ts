import styled, { css, keyframes } from "styled-components";

import { theme } from "../../../theme";

const { colors: { black, grey }, device } = theme

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const Sloader = styled.span<{size: number}>`
    width: ${({size}) => `${size}px`};
    height: ${({size}) => `${size}px`};
    border: 5px solid ${grey};
    border-bottom-color: ${black};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;
`