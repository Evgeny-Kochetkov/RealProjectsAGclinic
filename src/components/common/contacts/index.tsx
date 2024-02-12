'use client'

import Image from 'next/image'

import { Section } from '../../ui/section'
import { MapComponent } from '../../ui/yandexMap'
import { Back } from '../../ui/back'

import watch from '../../../../public/images/watch.svg'
import phone from '../../../../public/images/phone.svg'
import locationSharpBlack from '../../../../public/images/locationSharpBlack.svg'

import {
    SContactsContent,
    SContactsBlock,
    STextContent,
    SH1,
    SH2,
    SP,
    SInfoWrap,
    SPhonesWrap
} from './style'
import {
    SPhone,
    SBold
} from '../footer/style'

import { ISiteSettings } from '@/types/siteSettingsType'

const Contacts = ({mainPage, siteSettings}: {mainPage: boolean; siteSettings: ISiteSettings}) => {
    const backContent = !mainPage 
    ? <Back/>
    : null

    const title = mainPage
        ?   <SH2>
                Как с нами связаться и добраться до клиники?
            </SH2>
        :   <SH1>
                Как с нами связаться и добраться до клиники?
            </SH1>

    return (
        <Section>
            <SContactsContent mainPage={mainPage}>
                <SContactsBlock mainPage={mainPage}>
                    <STextContent mainPage={mainPage}>
                        {backContent}
                        {title}
                        <SInfoWrap>
                            <Image 
                                src={watch}
                                alt='watch'
                                height={24}
                                width={24}
                                style={{'width': 'auto'}}
                            />
                            <div>   
                                <p>
                                    График работы:
                                </p>
                                <time>
                                    {siteSettings?.schedule}: {siteSettings?.start_schedule} - {siteSettings?.end_schedule}
                                </time>
                            </div>
                        </SInfoWrap>
                        <SInfoWrap>
                            <Image 
                                src={phone}
                                alt='phone'
                                height={24}
                                width={24}
                                style={{'width': 'auto'}}
                            />
                            <SPhonesWrap>
                                {siteSettings?.phone?.map((item, i) => (
                                        <SPhone
                                            key={i}
                                            href={`tel:${item}`}
                                        >
                                            {item.replace(/^\+(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/, '+ $1 ($2) $3 $4 $5')}
                                        </SPhone>
                                    ))
                                }
                                <p>
                                    Феникс:
                                    {siteSettings?.short_phone.map((item, i) => (
                                        <SBold
                                            key={i}
                                            href={`tel:${item}`}
                                        >
                                            {item}{siteSettings.short_phone.length && siteSettings.short_phone.length > 1 && siteSettings.short_phone.length !== i + 1 ? ',' : null}
                                        </SBold>
                                    ))}
                                </p>
                            </SPhonesWrap>
                        </SInfoWrap>
                        <SInfoWrap>
                            <Image 
                                src={locationSharpBlack}
                                alt='location'
                                height={24}
                                width={24}
                                style={{'width': 'auto'}}
                            />
                            <address>
                                <p>
                                    г. {siteSettings?.city?.name}
                                </p>
                                <p>
                                    {siteSettings?.address}
                                </p>
                            </address>
                        </SInfoWrap>
                    </STextContent>
                    <MapComponent siteSettings={siteSettings}/>
                </SContactsBlock>
            </SContactsContent>
        </Section>
    )
}

export default Contacts