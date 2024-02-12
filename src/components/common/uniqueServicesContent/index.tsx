'use client'

import Link from 'next/link'

import {
    useState
} from 'react'

import { Slider } from '../../ui/slider'

import { Section } from '../../ui/section'
import { Back } from '../../ui/back'
import { Title } from '../../ui/title'

import fallback from '../../../../public/images/fallback.jpg'

import {
    SBlock,
    SInfo,
    SInput,
    SP,
    SDesc
} from './style'

import { ICategoryServices } from '@/types/servicesСategoryType'

export const UniqueServicesContent = ({ servicesСategory, apiUrl }: { servicesСategory: ICategoryServices[]; apiUrl: string; }) => {
    const [searchTerm, setSearchTerm] = useState('')
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    return (
        <Section
            bgClass='bg1'
        >
            <Back/>
            <Title text='Уникальные услуги'/>
            <SInput
                type='text'
                placeholder='Поиск'
                value={searchTerm}
                onChange={handleInputChange}
            />
            <Slider numDisplayedSlides={1} showDots={true}>
                {servicesСategory?.filter((service) =>
                    service?.value.toLowerCase().includes(searchTerm.toLowerCase())
                ).map(({id, img, value, description, path}) => (
                    <Link
                        href={`/unique_services/${path}`}
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
                                src={img ? `${apiUrl}/public/uploads/images/${img}?width=310&quality=90` : fallback.src}
                                alt='unique service'
                                style={{'borderRadius': '10px'}}
                                width={310}
                                height={310}
                            />
                            <SInfo>
                                <SP>
                                    {value}
                                </SP>
                                <SDesc>
                                    {description}
                                </SDesc>
                            </SInfo>
                        </SBlock>
                    </Link>
                ))}
            </Slider>
        </Section>
    )
}