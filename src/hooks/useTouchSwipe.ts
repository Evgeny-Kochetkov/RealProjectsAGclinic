import {
    useState,
    useCallback
} from 'react'

export const useTouchSlider = (
    nextSlideProp: () => void,
    prevSlideProp: () => void,
    sliderRef: React.RefObject<HTMLDivElement>
) => {

    const [startX, setStartX] = useState<number | null>(null)
    const [scrollLeft, setScrollLeft] = useState(0)

    const handleTouchStart = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
        const touch = event.touches[0]
        setStartX(touch.clientX)
    }, [])

    const handleTouchMove = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
        if (!startX) return
    
        const touch = event.touches[0]
        const diff = startX - touch.clientX
        const sliderElement = sliderRef.current
        
        if (sliderElement) {
            if (diff > 0) {
                if (scrollLeft === 0) {
                    setScrollLeft(1)
                }
                return
            }
        
            if (diff < 0) {
                if (scrollLeft === 1) {
                    setScrollLeft(0)
                }
                return
            }
        }
    
        setStartX(touch.clientX)
    }, [startX, scrollLeft])

    const handleTouchEnd = useCallback(() => {
        setStartX(null)
        if (sliderRef.current) {
            if (scrollLeft) {
                nextSlideProp()
            } else {
                prevSlideProp()
            }
        }
    }, [nextSlideProp, prevSlideProp, scrollLeft])

    return { handleTouchStart, handleTouchMove, handleTouchEnd }
}