'use client'

import Link from 'next/link'

import {
    useState
} from 'react'

import { Section } from '../../ui/section'
import { Back } from '../../ui/back'
import { Title } from '../../ui/title'
import { Slider } from '../../ui/slider'

import fallback from '../../../../public/images/fallback.jpg'

import {
    SBlock,
    SInfo,
    SName,
    SSpeciality,
    SDesc
} from './style'
import { SInput } from '../uniqueServicesContent/style'

import { SContentLink } from '../services/style'
import { ISpecialists } from '@/types/specialistsType'

export const SpecialistsContent = ({ specialist, apiUrl }: { specialist: ISpecialists[]; apiUrl: string; }) => {

    const [searchTerm, setSearchTerm] = useState('')
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    return (
        <Section
            bgClass='bg1'
        >
            <Back/>
            <Title text='Наши специалисты'/>
            <SInput
                type='text'
                placeholder='Поиск'
                value={searchTerm}
                onChange={handleInputChange}
            />
            <Slider numDisplayedSlides={1} showDots={true}>
                {specialist?.filter((specialist) =>
                    specialist?.fio.toLowerCase().includes(searchTerm.toLowerCase())
                ).map(({id, preview_img, fio, specialization, preview_description, path}) => (
                    <SBlock
                        key={id}
                    >
                        <img
                            src={preview_img ? `${apiUrl}/public/uploads/images/${preview_img}?width=310&quality=90` : fallback.src}
                            alt='photo of a specialist'
                            width={310}
                            height={381}
                            style={{'borderRadius': '10px', 'backgroundColor': '#E0E0E0'}}
                        />
                        <SInfo>
                            <SName>
                                {fio}
                            </SName>
                            <SSpeciality>
                                {specialization}
                            </SSpeciality>
                            <SDesc>
                                {preview_description}
                            </SDesc>
                        </SInfo>
                        <Link
                            href={`/specialists/${path}`}
                            style={{
                                'maxWidth': '300px',
                                'width': '100%'
                            }}
                        >
                            <SContentLink>
                                Подробнее
                            </SContentLink>
                        </Link>
                    </SBlock>
                ))}
            </Slider>
        </Section>
    )
}