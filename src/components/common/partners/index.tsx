'use client'

import { Section } from '../../ui/section'
import { Back } from '../../ui/back'
import { Title } from '../../ui/title'

import { SPartnersWrap } from './style'

import { IPartners } from '@/types/partnersType'

export const Partners = ({ partners, apiUrl }: { partners: IPartners[]; apiUrl: string; }) => {
    return (
        <Section
            bgClass='bg3'
        >
            <Back/>
            <Title text='Наши партнеры'/>
            <SPartnersWrap>
                {partners.map(({id, img, link}) => (
                    <a
                        key={id}
                        target='_blank'
                        rel='noopener noreferrer'
                        href={link}
                        
                        
                    >
                        <img
                            src={`${apiUrl}/public/uploads/images/${img}?width=530&quality=90`}
                            alt={'partner1'}
                            style={{'borderRadius': '10px', 'width': 'auto'}}
                            width={530}
                            height={212}
                        />
                    </a>
                ))}
            </SPartnersWrap>
        </Section>
    )
}