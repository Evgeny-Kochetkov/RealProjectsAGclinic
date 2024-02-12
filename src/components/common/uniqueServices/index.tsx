'use client'

import Link from 'next/link'

import {
    useState,
    useCallback,
    useRef
} from 'react'

import { useTouchSlider } from '../../../hooks/useTouchSwipe'

import { Section } from '../../ui/section'

import fallback from '../../../../public/images/fallback.jpg'

import {
    SH2,
    SHr,
    SSliderWrap,
    Slider,
    SSliderLine,
    SliderBlock,
    SCard,
    SH3,
    SP,
    SArrowBtn,
    SArrow,
    SCircle,
    SContentLink
} from './style'

import { ICategoryServices } from '@/types/servicesСategoryType'
const UniqueServices = ({ servicesСategory, apiUrl }: { servicesСategory: ICategoryServices[]; apiUrl: string; }) => {

    const sliderRef = useRef<HTMLDivElement>(null)

    const [slide, setSlide] = useState(0)

    const prevSlide = useCallback(() => {
        if (!servicesСategory) return
        const s = window.innerWidth <= 425 ? servicesСategory.length : Math.ceil(servicesСategory.length / 2)
        setSlide((state) => (state > 0 && state <= s) ? state - 2 : state)
    }, [servicesСategory])

    const nextSlide = useCallback(() => {
        if (!servicesСategory) return
        const s = window.innerWidth <= 425 ? servicesСategory.length : Math.ceil(servicesСategory.length / 2)
        setSlide((state) => (state >= 0 && state < s - 1) ? state + 2 : 0)
    }, [servicesСategory])

    const { handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchSlider(nextSlide, prevSlide, sliderRef)

    return (
        <Section>
            <SH2>
                Уникальные услуги
            </SH2>  
            <SHr/>
            {servicesСategory && servicesСategory.length
                ?
                <SSliderWrap>
                    <Slider>
                        <SSliderLine
                            slides={servicesСategory.length}
                            slide={slide}
                            ref={sliderRef}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {servicesСategory.map(({id, img, value, path}, i) => (
                                <Link
                                    href={`/unique_services/${path}`}
                                    key={id}
                                >
                                    <SliderBlock i={i}>
                                        <SCard i={i}>
                                            <img
                                                src={img ? `${apiUrl}/public/uploads/images/${img}?width=194&quality=90` : fallback.src}
                                                alt={value}
                                                width={194}
                                                height={194}
                                            />
                                            <SH3>
                                                {value}
                                            </SH3>
                                            <SP>
                                                Подробнее
                                            </SP>
                                        </SCard>
                                    </SliderBlock>
                                </Link>
                            ))}
                        </SSliderLine>
                    </Slider>
                    <SArrowBtn
                        onClick={nextSlide}
                    >
                        <SArrow/>
                        <SCircle/>
                    </SArrowBtn>
                </SSliderWrap>
                :
                null
            }
            <Link
                href='/unique_services'
                style={{
                    'maxWidth': '300px',
                    'width': '100%'
                }}
            >
                <SContentLink>
                    Смотреть все
                </SContentLink>
            </Link>
        </Section>
    )
}

export default UniqueServices