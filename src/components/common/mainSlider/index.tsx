'use client'

import Image from 'next/image'
import Link from 'next/link'

import {
    useCallback,
    useState,
    useRef
} from 'react'

import { useDispatch } from 'react-redux'
import { openModalSignUp } from '@/redux/features/modalSignUpSlise'

import { useTouchSlider } from '../../../hooks/useTouchSwipe'

import sliderVideo from '../../../../public/video/sliderVideo.mp4'
import findOutAboutUs from '../../../../public/images/findOutAboutUs.svg'

import {
    SMainSlider,
    SSliderWrap,
    SSliderLine,
    SliderBlock,
    SVideoBackground,
    SContentSlide,
    STitleWrap,
    SH1,
    SP,
    SArrowsWrap,
    SArrowBtn,
    SArrow,
    SCircle,
    SSlide,
    SButton
} from './style'

import { IBanners } from '../../../types/bannersType'

const MainSlider = ({ banners, apiUrl }: { banners: IBanners[]; apiUrl: string; }) => {

    const dispatch = useDispatch()
      
    const videoRef = useRef<HTMLVideoElement>(null)
    const sliderRef = useRef<HTMLDivElement>(null)

    const [slide, setSlide] = useState(0)
    
    const prevSlide = useCallback(() => {
        setSlide((state) => (state > 0 && state <= banners.length) ? state - 1 : state /* banners.length + 1 */)
    }, [banners])

    const nextSlide = useCallback(() => {
        setSlide((state) => (state >= 0 && state < banners.length) ? state + 1 : state /* 0 */)
    }, [banners])
    
    const { handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchSlider(nextSlide, prevSlide, sliderRef)
    
    return (
        <SMainSlider>
            <SSliderWrap>
                <SArrowsWrap>
                    <SArrowBtn
                        style={{'transform': 'scaleX(-1)'}}
                        onClick={prevSlide}
                    >
                        <SArrow slide={slide}/>
                        <SCircle className={slide > 0 ? 'active' : undefined} slide={slide}/>
                    </SArrowBtn>
                    <SArrowBtn
                        onClick={nextSlide}
                    >
                        <SArrow slide={slide}/>
                        <SCircle className={slide < banners.length ? 'active' : undefined} slide={slide}/>
                    </SArrowBtn>
                </SArrowsWrap>
                <SSliderLine
                    slide={slide}
                    banners={banners.length + 1}
                    ref={sliderRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <SliderBlock>
                        <SVideoBackground>
                            <video ref={videoRef} autoPlay muted loop preload='metadata' playsInline>
                                <source src={sliderVideo} type='video/mp4'/>
                                Your browser does not support the video tag.
                            </video>
                        </SVideoBackground>
                        <SContentSlide>
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://www.youtube.com'
                            >
                                <Image 
                                    src={findOutAboutUs}
                                    alt='findOutAboutUs'
                                    height={93}
                                    width={90}
                                    style={{'width': 'auto'}}
                                />
                            </a>
                            <STitleWrap>
                                <SH1>
                                    AG Clinic
                                </SH1>
                                <SP>
                                    Сеть клиник эстетической медицины
                                </SP>
                            </STitleWrap>
                            <SButton
                                onClick={() => dispatch(openModalSignUp())}
                            >
                                Записаться
                            </SButton>
                        </SContentSlide>
                    </SliderBlock>
                    {banners.map(({id, desktop_img, mobile_img, url}) => (
                        <SliderBlock key={id}>
                            <Link
                                href={url}
                            >
                                <SSlide
                                    bg={`${apiUrl}/public/uploads/images/${desktop_img}`}
                                    bgMob={`${apiUrl}/public/uploads/images/${mobile_img}`}
                                />
                            </Link>
                        </SliderBlock>
                    ))}
                </SSliderLine>
            </SSliderWrap>
        </SMainSlider>
    )
}

export default MainSlider