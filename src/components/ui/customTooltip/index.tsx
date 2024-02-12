import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { useAppSelector } from '@/redux/store'
import { closeCustomTooltip } from '@/redux/features/customTooltipSlise'

import {
    SCustomTooltip,
    STextBlock,
    STitle,
    SDescr
} from './style'

export const CustomTooltip = () => {

    const dispatch = useDispatch()
    
    const customTooltipState = useAppSelector((state) => state.customTooltipReducer.customTooltipState)

    const successSvg = <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="30" fill="url(#paint0_linear_642_4149)"/>
    <path d="M26.903 35.4908L42.1659 20.2263L44.5154 22.5742L26.903 40.1866L16.3359 29.6195L18.6838 27.2716L26.903 35.4908Z" fill="white"/>
    <defs>
    <linearGradient id="paint0_linear_642_4149" x1="30" y1="0" x2="30" y2="60" gradientUnits="userSpaceOnUse">
    <stop offset="0.0416667" stopColor="#18EDB8"/>
    <stop offset="0.453125" stopColor="#4DEAC2"/>
    <stop offset="0.9997" stopColor="#00CC99"/>
    <stop offset="0.9998" stopColor="#00B789"/>
    <stop offset="0.9999" stopColor="#00CC99"/>
    <stop offset="1" stopColor="#00C493"/>
    </linearGradient>
    </defs>
    </svg>

    const errorSvg = <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="30" fill="#EB5757"/>
    <path d="M30.2238 27.876L38.443 19.6568L40.7909 22.0046L32.5717 30.2239L40.7909 38.4431L38.443 40.7909L30.2238 32.5717L22.0046 40.7909L19.6567 38.4431L27.876 30.2239L19.6567 22.0046L22.0046 19.6568L30.2238 27.876Z" fill="white"/>
    </svg>

    const infoSvg = <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="30" fill="#5458F7"/>
    <path d="M27.7612 23.1343H32.3881V18.5074H27.7612V23.1343ZM27.7612 41.6417H32.3881V27.7611H27.7612V41.6417Z" fill="white"/>
    </svg>

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(closeCustomTooltip())
        }, 3000)

        return () => {
            clearTimeout(timeout)
        }
    }, [customTooltipState])

    const renderTooltip = customTooltipState ? 
        <SCustomTooltip
            status={customTooltipState.status}
        >
            {customTooltipState.status === 'success' ? successSvg : null}
            {customTooltipState.status === 'error' ? errorSvg : null}
            {customTooltipState.status === 'notice' ? infoSvg : null}
            <STextBlock>
                <STitle>
                    {customTooltipState.titleText}
                </STitle>
                <SDescr>
                    {customTooltipState.text}
                </SDescr>
            </STextBlock>
        </SCustomTooltip> : null

    return renderTooltip
}