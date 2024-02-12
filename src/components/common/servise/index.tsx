'use client'

import Link from 'next/link'

import React from 'react'

import { Back } from '../../ui/back'
import { Title } from '../../ui/title'

import {
    SSection,
    SPaddingWrap,
    SH2,
    SDesc,
    SWrap
} from './style'
import {
    SContentLink
} from '../uniqueServices/style'

import { IService } from '@/types/servicesСategoryType'

export const Service = ({ service, apiUrl }: { service: IService; apiUrl: string; }) => {
    return (
        <SSection>
            <SPaddingWrap>
                <Back/>
                <Title text={service.title}/>
            </SPaddingWrap>
            {service.main_img 
                ? <img
                    src={`${apiUrl}/public/uploads/images/${service.main_img}?width=1440&quality=90`}
                    alt='BG'
                    width={1440}
                    height={513}
                    style={{'width': '100%', 'height': 'auto'}}
                  /> 
                : null
            }
            <SWrap>
                <SH2>
                    Описание услуги
                </SH2>
                <SDesc dangerouslySetInnerHTML={{ __html: service.text }}/>
                <Link
                    href='/price'
                    style={{
                        'maxWidth': '300px',
                        'width': '100%'
                    }}
                >
                    <SContentLink>
                        Узнать стоимость
                    </SContentLink>
                </Link>
            </SWrap>
        </SSection>
    )
}