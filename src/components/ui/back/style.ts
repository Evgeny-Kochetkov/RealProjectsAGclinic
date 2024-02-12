import styled from 'styled-components'

export const SBackWrap = styled.div`
    display: flex;
    width: 100%;
`

export const SBack = styled.a<{white?: boolean}>`
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${({white}) => white ? '#FFF': 'rgba(18, 3, 9, 0.50)'};
`