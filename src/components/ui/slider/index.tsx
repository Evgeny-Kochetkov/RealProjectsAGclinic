import {
    useState,
    useCallback
} from 'react'

import { Dots } from './dots'

import {
    SSliderContainer,
    SSliderWrapper,
    SSlider
} from './style'


export const Slider = (
    {children, numDisplayedSlides, showDots, numItemOnPage, numItemOnPageLaptop, numItemOnPageTablet, marginTop, showArrows}: 
    {
        children: React.ReactNode[];
        numDisplayedSlides: number;
        showDots: boolean;
        numItemOnPage?: number;
        numItemOnPageLaptop?: number;
        numItemOnPageTablet?: number;
        marginTop?: string;
        showArrows?: boolean
    }) => {

    const [slide, setSlide] = useState(1)
    const [numSlides, setNumSlides] = useState(Math.ceil(children.length / numDisplayedSlides))
    
    const handleScroll = useCallback((event: any) => {
        if ( !numSlides) {
            return null
        }
        const slideWidth = event.target.clientWidth
        const scrollPosition = event.target.scrollLeft
        requestAnimationFrame(() => {
            const newActiveSlide = Math.floor((scrollPosition + slideWidth) / slideWidth)
            setSlide(newActiveSlide)
        })
    }, [])

    if ( !numSlides || !handleScroll) {
        return null
    }

    const dotsContent = showDots
        ?   <Dots slide={slide} numSlides={numSlides}/>
        :   null

    return (
        <SSliderContainer marginTop={marginTop ? marginTop : undefined}>
            <SSliderWrapper>
                <SSlider
                    onScroll={handleScroll}
                    numItemOnPage={numItemOnPage}
                    numItemOnPageLaptop={numItemOnPageLaptop}
                    numItemOnPageTablet={numItemOnPageTablet}
                >
                    {children}
                </SSlider>
            </SSliderWrapper>
            {dotsContent}
        </SSliderContainer>
    )
}