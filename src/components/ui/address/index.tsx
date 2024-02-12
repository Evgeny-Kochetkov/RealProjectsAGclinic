import Image from 'next/image'

import {
    useState,
    useCallback,
    useEffect,
    useRef
} from 'react'

import locationSharp from '../../../../public/images/locationSharp.svg'

import {
    SCity,
    SP,
    SCities,
    SCityLink
} from './style'

import { ISiteSettings } from '@/types/siteSettingsType'

export const Address = ({footer, mobileMenu, siteSettings}: {footer?: boolean, mobileMenu?: boolean, siteSettings: ISiteSettings}) => {

    const citiesRef = useRef<HTMLDivElement | null>(null)

    const [activeCities, setActiveCities] = useState(false)

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (citiesRef.current && !citiesRef.current.contains(event.target as Node)) {
                setActiveCities(false)
            }
        }

        document.addEventListener('mousedown', handleOutsideClick)

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [])

    const openCities = useCallback(() => {
        setActiveCities(true)
    }, [])

    const image = !footer
        ?   <Image 
                src={locationSharp}
                alt='Location sharp'
                priority
                width={24}
                height={24}
            />
        :   null

    return (
        <address
            style={{
                'position': 'relative'
            }}
        >
            <SCity
                onClick={openCities}
            >
                {image}
                г. {siteSettings.city.name}
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none">
                    <path d="M2.53823 5.20232L0.701846 1.43849C0.377738 0.774206 0.861441 0 1.60058 0H5.36441C6.112 0 6.59524 0.790388 6.25449 1.45581L4.32704 5.21963C3.95142 5.95314 2.89959 5.94296 2.53823 5.20232Z" fill="white"/>
                </svg>
            </SCity>
            <SP
                footer={footer}
            >
                {siteSettings.address}
            </SP>
            <SCities
                footer={footer}
                mobileMenu={mobileMenu}
                ref={citiesRef}
                activeCities={activeCities}
            >
                {[{id: '1', name: 'Донецк', url: 'https://agclinic.ru/'}, {id: '2', name: 'Макеевка', url: 'https://mak.agclinic.ru'}, {id: '3', name: 'Ростов-на-Дону', url: 'https://rnd.agclinic.ru'}].map(({id, name, url}) => (
                    <SCityLink
                        key={id}
                        id={id}
                        data-city={name}
                        href={url}
                    >
                        г. {name}
                    </SCityLink>
                ))}
            </SCities>
        </address>
    )
}