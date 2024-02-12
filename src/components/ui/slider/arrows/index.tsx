import {
    SArrowsWrap,
    SArrowBtn,
    SArrow,
    SCircle
} from './style'

export const Arrows = ({slide, numSlides, scrollLeft, scrollRight}: {slide: number; numSlides: number; scrollLeft: () => void; scrollRight: () => void; }) => {
    return (
        <SArrowsWrap>
            <SArrowBtn
                style={{'transform': 'scaleX(-1)'}}
                onClick={scrollLeft}
            >
                <SArrow slide={slide}/>
                <SCircle className={slide > 0 ? 'active' : undefined} slide={slide}/>
            </SArrowBtn>
            <SArrowBtn
                onClick={scrollRight}
            >
                <SArrow slide={slide}/>
                <SCircle className={slide < numSlides ? 'active' : undefined} slide={slide}/>
            </SArrowBtn>
        </SArrowsWrap>
    )
}