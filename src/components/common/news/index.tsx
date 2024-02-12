'use client'

import Link from 'next/link'

import { Back } from '../../ui/back'
import { Section } from '../../ui/section'
import { Title } from '../../ui/title'
import { Slider } from '../../ui/slider'

import fallback from '../../../../public/images/fallback.jpg'

import {
    SCard,
    SName,
    SP
} from './style'
import { SNoItems } from '../vacancies/style'

import { INews } from '@/types/newsType'

export const News = ({ news, apiUrl }: { news: INews[]; apiUrl: string; }) => {
    return (
        <Section>
            <Back />
            <Title text='Наши новости'/>
            {news && news.length
                ? <Slider numDisplayedSlides={1} showDots={true}>
                    {news.map(({id, title, preview_description, img, path}) => (
                        <Link
                            key={id}
                            href={`/news/${path}`}
                            style={{
                                'flex': '1 0 100%',
                                'scrollSnapAlign': 'start',
                                'overflow': 'hidden'
                            }}
                        >
                            <SCard>
                                <img
                                    src={img ? `${apiUrl}/public/uploads/images/${img}?width=310&quality=90` : fallback.src}
                                    alt='news'
                                    width={310}
                                    height={381}
                                    style={{'objectFit': 'cover', 'width': '100%', 'borderRadius': '10px'}}
                                />
                                <SName>
                                    {title}
                                </SName>
                                <SP>
                                    {preview_description}
                                </SP>
                            </SCard>
                        </Link>
                    ))}
                </Slider>
              : <SNoItems>
                    На данный момент новости отсутствуют.
                </SNoItems>
            }
        </Section>
    )
}
