'use client'

import Link from 'next/link'

import { Section } from '../../ui/section'
import { Slider } from '../../ui/slider'

import fallback from '../../../../public/images/fallback.jpg'

import {
    SBlock,
    SCard,
    SImgWrap,
    SName,
    SP
} from './style'
import {
    SH2,
    SHr
} from '../uniqueServices/style'
import { SContentLink } from '../uniqueServices/style'

import { INews } from '@/types/newsType'

const New = ({ news, apiUrl }: { news: INews[]; apiUrl: string; }) => {
    return (
        <Section>
            <SH2>
                Что нового
            </SH2>
            <SHr/>
            <Slider numDisplayedSlides={1} showDots={true}>
                {news?.map(({id, img, title, preview_description, path}, i) => (
                    <Link
                        href={`/news/${path}`}
                        key={id}
                        style={{
                            'flex': '1 0 100%',
                            'scrollSnapAlign': 'start',
                            'overflow': 'hidden',
                            'borderRadius': '10px'
                        }}
                    >
                        <SBlock i={i}>
                            <SCard i={i}>
                                <SImgWrap>
                                    <img
                                        src={img ? `${apiUrl}/public/uploads/images/${img}?width=300&quality=90` : fallback.src}
                                        alt='news'
                                        width={300}
                                        height={265}
                                        style={{'objectFit': 'cover', 'borderRadius': '10px'}}
                                    />
                                    <SName>
                                        {title}
                                    </SName>
                                </SImgWrap>
                                <SP>
                                    {preview_description}
                                </SP>
                            </SCard>
                        </SBlock>
                    </Link>
                ))}
            </Slider>
            <Link
                href='/news'
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

export default New