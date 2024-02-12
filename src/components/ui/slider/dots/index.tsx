import {
    SDotsWrap,
    SDot
} from './style'

export const Dots = ({slide, numSlides}: {slide: number, numSlides: number}) => {
    const dots = Array.from({ length: numSlides }, (_, i) => (
        <SDot
            key={i}
            className={slide === i + 1 ? 'active' : undefined}
        />
    ))

    return (
        <SDotsWrap>
            {dots}
        </SDotsWrap>
    )
}