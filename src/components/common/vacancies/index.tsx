'use client'

import Image from 'next/image'

import { Section } from '../../ui/section'
import { Back } from '../../ui/back'
import { Title } from '../../ui/title'
import { Slider } from '../../ui/slider'

import logo from '../../../../public/images/logo2.svg'

import {
    SWrap,
    SCard,
    SImgBlock,
    SP,
    SA,
    SH3,
    SUlWrap,
    SInfoBlock,
    SDesc,
    SNoItems
} from './style'

import { IVacancies } from '@/types/vacanciesType'

export const Vacancies = ({ vacancies }: { vacancies: IVacancies[]; }) => {
    return (
        <Section
            bgClass='bg3'
        >
            <Back/>
            <Title text='Наши вакансии'/>
            {vacancies && vacancies.length
                ? <Slider numDisplayedSlides={1} numItemOnPage={1} numItemOnPageLaptop={1} numItemOnPageTablet={1} showDots={true}>
                    {vacancies.map(({id, title, requirements}, i) => (
                        <SWrap 
                            style={{
                                'flex': '1 0 100%',
                                'scrollSnapAlign': 'start',
                                'overflow': 'hidden'
                            }}
                            key={id}
                            i={i}
                        >
                            <SCard i={i}>
                                <SImgBlock>
                                    <Image
                                        src={logo}
                                        alt={'logo'}
                                        width={283.828}
                                        height={160}
                                    />
                                    <SP>
                                        Отправляйте Ваши резюме с фото на почту:
                                    </SP>
                                    <SA
                                        href='mailto:hr.donetsk.ag@gmail.com'
                                    >
                                        hr.donetsk.ag@gmail.com
                                    </SA>
                                </SImgBlock>
                                <div>
                                    <SH3>
                                        {title}
                                    </SH3>
                                    <SUlWrap>
                                        <SDesc dangerouslySetInnerHTML={{ __html: requirements }}/>
                                        <SInfoBlock>
                                            <SP>
                                                Отправляйте Ваши резюме с фото на почту:
                                            </SP>
                                            <SA
                                                href='mailto:hr.donetsk.ag@gmail.com'
                                            >
                                                hr.donetsk.ag@gmail.com
                                            </SA>
                                        </SInfoBlock>
                                    </SUlWrap>
                                </div>
                            </SCard>
                        </SWrap>
                    ))}
                  </Slider>
                : <SNoItems>
                    На данный момент вакансии отсутствуют.
                  </SNoItems>
            }
        </Section>
    )
}