'use client'

import Link from 'next/link'

import { Back } from '../../ui/back'
import { Section } from '../../ui/section'
import { Title } from '../../ui/title'
import { Slider } from '../../ui/slider'

import fallback from '../../../../public/images/fallback.jpg'

import {
    SSale,
    SImgWr
} from './style'
import {
    SCard,
    SName,
    SP
} from '../news/style'
import { SNoItems } from '../vacancies/style'

import { IStocks } from '../../../types/stocksType'

export const Stocks = ({ stocks, apiUrl }: { stocks: IStocks[]; apiUrl: string; }) => {
    return (
        <Section>
            <Back/>
            <Title text='Наши акции'/>
            {stocks && stocks.length
                ? <Slider numDisplayedSlides={1} showDots={true}>
                    {stocks.map(({id, title, preview_description, img, path, discount}) => (
                        <Link
                            key={id}
                            href={`/stock/${path}`}
                            style={{
                                'flex': '1 0 100%',
                                'scrollSnapAlign': 'start',
                                'overflow': 'hidden'
                            }}
                        >
                            <SCard>
                                <SImgWr>
                                    <SSale>
                                        {discount ? `-${discount}%` : 'Акция!'}
                                    </SSale>
                                    <img
                                        src={img ? `${apiUrl}/public/uploads/images/${img}?width=310&quality=90` : fallback.src}
                                        alt='news'
                                        width={310}
                                        height={381}
                                        style={{'objectFit': 'cover', 'width': '100%'}}
                                    />
                                </SImgWr>
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
                    На данный момент акции отсутствуют.
                  </SNoItems>
            }
        </Section>
    )
}