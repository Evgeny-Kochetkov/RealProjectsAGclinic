'use client'

import Image from 'next/image'
import Link from 'next/link'

import {
    useCallback  
} from 'react'

import { useDispatch } from 'react-redux'
import { openModalSignUp } from '@/redux/features/modalSignUpSlise'

import { Section } from '../../ui/section'
import { Back } from '../../ui/back'
import { Slider } from '../../ui/slider'

import bg2 from '../../../../public/images/priceBG2.jpg'
import bg3 from '../../../../public/images/priceBG3.jpg'

import {
    SH1,
    SHr,
    SPrices,
    SP,
    SInfo,
    SChapterSection,
    SCardWrap,
    SCard,
    SChapter,
    SServiceWrap,
    SService,
    SPlus,
    SNameServise,
    SPlaseWrap,
    SPlase,
    SSpan,
    SWrap,
    SBtn,
    SPrise,
    SNotes,
    SPriseWrap,
    SDurationOne,
    SDurationTwo
} from './style'

import { IPrices } from '../../../types/pricesType'

export const Price = ({ prices, section }: { prices: IPrices[]; section: IPrices; }) => {
    const dispatch = useDispatch()
    console.log(section)
    const changeActiveService = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        const element = e.target as HTMLLinkElement
        const parentElement = element.parentNode as HTMLDivElement
        parentElement.classList.toggle('active')
        element.classList.toggle('active')
    }, [])

    return (
        <>
            <Section
                bg={`url('/images/priceBG.jpg') center center/cover no-repeat`}
            >
                <Back white/>
                <SH1>
                    Цены на услуги
                </SH1>
                <SHr/>
            </Section>
            <SPrices>
                <Image
                    src={bg2}
                    alt={'img'}
                    width={820}
                    height={500}
                    style={{'filter': 'grayscale(99%)'}}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
                />
                {/* <SInfo>
                    <SP>
                        Лазерная эпиляция – процедура аппаратной косметологии, которая применяется для удаления нежелательной растительности в любом участке тела и лица. В отличие от традиционных методов истребления волос, она характеризуется более продолжительным эффектом. Суть технологии заключается в уничтожении волосяных фолликул посредством лазерного излучения, что и приостанавливает появление новой растительности.
                    </SP>
                    <SP>
                        Лазерная эпиляция используется и для интимной зоны, а некоторые представители сильного пола применяют её как альтернативу ежедневному бритью для удаления волос на лице. Часто процедура применяется для решения проблемы сросшихся бровей.
                    </SP>
                </SInfo> */}
                <Image
                    src={bg3}
                    alt={'img'}
                    width={820}
                    height={500}
                    style={{'filter': 'grayscale(99%)', 'justifySelf': 'end'}}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
                />
            </SPrices>
            <SChapterSection>
                <Slider numDisplayedSlides={1} showDots={true}>
                    {prices.map(({id, value, path}, i) => (
                        <Link
                            key={id}
                            href={`/price/${path}`}
                            scroll={false}
                        >
                            <SCardWrap
                                i={i}
                                className={path === section.path ? 'active' : undefined}
                                id={i.toString()}
                            >
                                <SCard i={i} >
                                    <SChapter>
                                        {value}
                                    </SChapter>
                                </SCard>
                            </SCardWrap>
                        </Link>
                    ))}
                </Slider>
                <SServiceWrap>
                    {/* prices?.filter((_, i) => i.toString() === activeChapter)[0] */section.category.map(({id, value, price}, i) => {
                        const placesContent = price?.map(({id, title, cost, discount, duration, notes}, i) => (
                            <SPlase
                                key={id}
                                length={price.length}
                                i={i}
                            >
                                <SSpan
                                    style={{'textAlign': 'start'}}
                                >
                                    {title}
                                </SSpan>
                                <SPriseWrap>
                                    <SPrise>
                                        <p style={{'display': 'flex'}}>
                                            <span>
                                                {cost} руб
                                            </span>
                                            {discount && discount.length ? 
                                                <>
                                                    &nbsp;/&nbsp;
                                                    <span style={{'color': '#EB5757'}}>
                                                        {discount[0].discount_cost}
                                                    </span>
                                                    &nbsp;руб
                                                </>
                                                : null
                                            }
                                        </p>
                                        {duration ?
                                            <SDurationOne>
                                                {duration} мин
                                            </SDurationOne> : null
                                        }
                                        {notes ? 
                                            <SNotes>
                                                {notes}
                                            </SNotes> : null
                                        }
                                    </SPrise>
                                    {duration ?
                                        <SDurationTwo>
                                            {duration} мин
                                        </SDurationTwo> : null
                                    }
                                </SPriseWrap>
                            </SPlase>
                        ))

                        return (
                            <SWrap
                                key={id}
                                className={!i ? 'active' : undefined}
                            >
                                <SService
                                    onClick={changeActiveService}
                                    className={!i ? 'active' : undefined}
                                >
                                    <SPlus/>
                                    <SNameServise>
                                        {value}
                                    </SNameServise>
                                </SService>
                                <SPlaseWrap>
                                    {placesContent}
                                </SPlaseWrap>
                            </SWrap>
                        )
                    })}
                </SServiceWrap>
                <SBtn
                    onClick={() => dispatch(openModalSignUp())}
                >
                    Записаться на процедуру
                </SBtn>
            </SChapterSection>
        </>
    )
}