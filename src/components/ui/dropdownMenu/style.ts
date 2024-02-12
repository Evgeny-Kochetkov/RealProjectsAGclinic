import styled, { css } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { grey } } = theme

const level1 = css`
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
`

const level2 = css`
    top: 0;
    left: 100%;
`

export const SDropdownWrap = styled.div<{level: number}>`
    ${({level}) => level === 1 ? level1 : level2}

    position: absolute;
    display: none;
    z-index: 20;
`

export const SDropdown = styled.div<{level: number}>`
    border-radius: 20px;
    border: 1px solid ${grey};
    background: #FFF;
    min-width: 350px;
    margin: ${({level}) => level === 1 ? '30px 0 0 0' : '0 0 0 5px'};
`

export const SDropdownContent = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 20px 0;

    > li {
        position: relative;
        display: flex;
        align-items: center;
        min-height: 40px;
        width: 100%;

        > a {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            min-height: 40px;
            padding: 0 20px;

            > span > svg > path {
                fill: ${grey};
            }
        }
        
        &:hover {
            background: ${grey};

            > div:nth-child(2) {
                display: block;
            }

            > a > span {
                color: #FFF;
                /* font-weight: 600; */

                > svg > path {
                    fill: white;
                }
            }
        }
    }
`