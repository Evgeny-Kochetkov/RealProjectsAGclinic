'use client'

import Link from 'next/link'

import {
    useState,
    useCallback,
} from 'react'

import { Section } from '../../ui/section'
import { Back } from '../../ui/back'
import { Title } from '../../ui/title'
import { Slider } from '../../ui/slider'

import fallback from '../../../../public/images/fallback.jpg'

import {
    SInfo,
    SP,
    SSpan,
    SBtnWrap,
    SBlock,
    SContentLink
} from './style'
import { SInput } from '../uniqueServicesContent/style'

import { ICategoryServices, IService } from '../../../types/servicesСategoryType'

export const Services = ({ category, allServices, searchData, apiUrl }: { category?: ICategoryServices; allServices?: IService[]; searchData?: string; apiUrl: string; }) => {
    
    const [searchTerm, setSearchTerm] = useState(Array.isArray(searchData) ? searchData.join(', ') : searchData || '')

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }, [])

    return (
        <Section
            bgClass='bg1'
        >
            <Back/>
            <Title text={category?.value || 'Все услуги'}/>
            <SInput
                type='text'
                placeholder='Поиск'
                value={searchTerm}
                onChange={handleInputChange}
            />
                <Slider numDisplayedSlides={1} showDots={true}>
                {(category?.services || allServices)!
                .filter((service) => 
                service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (typeof service.troubles === 'string' && 
                    service.troubles.split(",").map((trouble) => trouble.trim().toLowerCase())
                    .some((t) => t.includes(searchTerm.toLowerCase())))
                ) 
                .map(({id, title, preview_description, preview_img, path}) => (
                    <SBlock
                        key={id}
                        style={{
                            'flex': '1 0 100%',
                            'scrollSnapAlign': 'start',
                            'borderRadius': '10px',
                            'overflow': 'hidden'
                        }}
                    >
                        <div>
                            <img
                                src={preview_img ? `${apiUrl}/public/uploads/images/${preview_img}?width=310&quality=90` : fallback.src}
                                alt='service'
                                style={{'borderRadius': '10px', 'width': '100%'}}
                                width={310}
                                height={310}
                            />
                            <SInfo>
                                <SP>
                                    {title}
                                </SP>
                                <SSpan>
                                    {preview_description}
                                </SSpan>
                            </SInfo>
                        </div>
                        <SBtnWrap>
                            <Link
                                href={`/services/${path}`}
                                style={{
                                    'maxWidth': '300px',
                                    'width': '100%'
                                }}
                            >
                                <SContentLink>
                                    Подробнее
                                </SContentLink>
                            </Link>
                        </SBtnWrap>
                    </SBlock>
                ))}
            </Slider>
        </Section>
    )
}