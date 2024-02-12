'use client'

import Link from 'next/link'

import { Section } from '../../ui/section'
import { Slider } from '../../ui/slider'

import fallback from '../../../../public/images/fallback.jpg'

import {
    SBlock,
    SInfo
} from './style'
import {
    SH2,
    SHr
} from '../uniqueServices/style'
import { SContentLink } from '../uniqueServices/style'

import { ISpecialists } from '@/types/specialistsType'

const Specialists = ({ specialist, apiUrl }: { specialist: ISpecialists[]; apiUrl: string; }) => {

    return (
        <Section>
            <SH2>
                Наши специалисты
            </SH2>
            <SHr/>
            <Slider numDisplayedSlides={1} showDots={true}>
                {specialist?.map(({id, preview_img, fio, specialization, path}) => (
                    <Link
                        href={`/specialists/${path}`}
                        key={id}
                        style={{
                            'flex': '1 0 100%',
                            'scrollSnapAlign': 'start',
                            'borderRadius': '10px',
                            'overflow': 'hidden'
                        }}
                    >
                        <SBlock>
                            <img
                                src={preview_img ? `${apiUrl}/public/uploads/images/${preview_img}?width=310&quality=90` : fallback.src}
                                alt='photo of a specialist'
                                width={310}
                                height={381}
                                style={{'objectFit': 'cover', 'width': '100%', 'backgroundColor': '#E0E0E0'}}
                            />
                            <SInfo>
                                <p
                                    style={{'padding': '0 10px'}}
                                >
                                    {fio}
                                </p>
                                <p style={{'marginBottom': '20px'}}>
                                    {specialization}
                                </p>
                            </SInfo>
                        </SBlock>
                    </Link>
                ))}
            </Slider>
            <Link
                href='/specialists'
                style={{
                    'maxWidth': '300px',
                    'width': '100%'
                }}
            >
                <SContentLink>
                    Смотреть всеx
                </SContentLink>
            </Link>
        </Section>
    )
}

export default Specialists