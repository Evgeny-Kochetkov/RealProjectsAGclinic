'use client'

import Link from 'next/link'

import { Section } from '../../ui/section'
import { Slider } from '../../ui/slider'

import { ucFirst } from '@/utils/ucFirst'

import fallback from '../../../../public/images/fallback.jpg'

import {
    SBlock,
    SCard,
    SProblemName
} from './style'
import {
    SH2,
    SHr
} from '../uniqueServices/style'
import { IProblem } from '@/types/problemType'

const Problems = ({ problems, apiUrl }: { problems: IProblem[]; apiUrl: string; }) => {
    return (
        <Section
            bgClass='bg2'
        >
            <SH2>
                Какую проблему вы хотите решить?
            </SH2>
            <SHr/>
            <Slider numDisplayedSlides={2} showDots={true}>
                {problems.map(({id, name, img}, i) => (
                    <Link
                        key={id}
                        href={{
                            pathname: '/all_services',
                            query: { searchData: name }
                        }}
                    >
                        <SBlock i={i}>
                            <SCard i={i}>
                                <img
                                    src={img ? `${apiUrl}/public/uploads/images/${img}?width=310&quality=90` : fallback.src}
                                    alt={name}
                                    width={310}
                                    height={310}
                                    style={{
                                        'flex': '1 0 100%',
                                        'scrollSnapAlign': 'start',
                                        'borderRadius': '10px',
                                        'overflow': 'hidden',
                                        'maxHeight': '265px',
                                        'objectFit': 'cover'
                                    }}
                                />
                                <SProblemName>
                                    {ucFirst(name)}
                                </SProblemName>
                            </SCard>
                        </SBlock>
                    </Link>
                ))}
            </Slider>
        </Section>
    )
}

export default Problems