'use client'

import React from 'react'

import {
    useState, 
    useCallback
} from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { Address } from '../../ui/address'
import { SocialLinks } from '../../ui/socialLinks'
import { DropdownMenu2 } from '../../ui/dropdownMenu'

import logo from '../../../../public/images/logo.svg'

import {
    SHeader,
    SSpan,
    SNav,
    SUl,
    SLi,
    SDot,
    SAddressWrap,
    SSocialLinkWrap,
} from './style'

import { ISiteSettings } from '@/types/siteSettingsType'

export const Header = ({ settings }: { settings: ISiteSettings }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const handleMouseEnter = useCallback(() => {
        setIsDropdownOpen(true)
    }, [])

    return (
        <SHeader>
            <Link href='/'>
                <Image 
                    src={logo}
                    alt='AG clinic logo'
                    width={141.914}
                    height={80}
                    style={{'width': '100%', 'height': '100%'}}
                    priority
                />
            </Link>
            <SNav>
                <SUl>
                    {[...settings?.menu].sort((a, b) => a.order - b.order).map(({id, name, path, category}, i) => {
                        const path1 = path
                        return (
                            <SLi key={id}>
                                <Link
                                    id={path}
                                    href={`/${path}`}
                                    style={{'display': 'flex', 'alignItems': 'center', 'gap': '10px'}}
                                    onMouseEnter={category ? handleMouseEnter : undefined}
                                >
                                    <SSpan
                                        style={category && category.length ? {'fontFamily': 'var(--font-montserratAlternates)'} : undefined}
                                    >
                                        {name}
                                        {category && category.length 
                                            ? <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none">
                                                <path d="M2.53823 5.20232L0.701846 1.43849C0.377738 0.774206 0.861441 0 1.60058 0H5.36441C6.112 0 6.59524 0.790388 6.25449 1.45581L4.32704 5.21963C3.95142 5.95314 2.89959 5.94296 2.53823 5.20232Z"/>
                                              </svg> 
                                            : null
                                        }
                                    </SSpan>
                                    {i + 1 === settings.menu.length ? null : <SDot/>}
                                </Link>
                                {category && category.length && isDropdownOpen ? <DropdownMenu2 level={1}>
                                    {category?.map(({id, value, services, path}) => {
                                    const path2 = path
                                    return (
                                        <li key={id}>
                                            <Link
                                                id={id.toString()}
                                                href={`/${path1}/${path2}`}
                                                onClick={() => setIsDropdownOpen(false)}
                                            >
                                                <SSpan>
                                                    {value}
                                                    {services && services.length 
                                                        ? <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                                                            <path d="M5.20232 4.46177L1.43849 6.29815C0.774206 6.62226 0 6.13856 0 5.39942L0 1.63559C0 0.887997 0.790388 0.404755 1.45581 0.745514L5.21963 2.67296C5.95314 3.04858 5.94296 4.10041 5.20232 4.46177Z"/>
                                                        </svg> 
                                                        : null
                                                    }
                                                </SSpan>
                                            </Link>
                                            {services && services.length && isDropdownOpen ? <DropdownMenu2 level={2}>
                                                {services.map(({id, title, path}) => {
                                                const path3 = path
                                                return (
                                                    <li key={id}>
                                                        <Link
                                                            href={`/services/${path3}`}
                                                            onClick={() => setIsDropdownOpen(false)}
                                                        >
                                                            <SSpan>
                                                                {title}
                                                            </SSpan>
                                                        </Link>
                                                    </li>
                                                )})}
                                            </DropdownMenu2> : null}
                                        </li>
                                    )})}
                                </DropdownMenu2> : null}
                            </SLi>
                        )})}
                </SUl>
            </SNav>
            <SAddressWrap>
                <Address siteSettings={settings}/>
            </SAddressWrap>
            <SSocialLinkWrap>
                <SocialLinks height={24} siteSettings={settings}/>
            </SSocialLinkWrap>
        </SHeader>
    )
}