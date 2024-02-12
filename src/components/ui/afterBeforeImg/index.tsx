import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'

export const BeforeAfterSlider = ({ widthProp, before, after, i}: {widthProp: number; before: string; after: string; i: number; }) => {

    const FIRST_IMAGE = {
        imageUrl: before
    }

    const SECOND_IMAGE = {
        imageUrl: after
    }

    return (
        <ReactBeforeSliderComponent
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
            delimiterIconStyles={{
                'width': '76px',
                'height': '76px',
                'backgroundImage': "url('/images/arrows_down_up.svg')",
                'backgroundRepeat': 'no-repeat',
                'backgroundPosition': 'center'
            }}
        />
    )
}