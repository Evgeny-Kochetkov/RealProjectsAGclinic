'use client'

import { useState, useEffect } from 'react'

import { useAppSelector } from '@/redux/store'

import { Header } from '../common/header'
import { Footer } from '../common/footer'
import { ModalSignUp } from '../ui/modalSignUp'
import { CustomTooltip } from '../ui/customTooltip'
import { MobileHeader } from '../common/modileHeader'

import { ISiteSettings } from '@/types/siteSettingsType'

export const Layout = ({ children, settings } : { children: React.ReactNode; settings: ISiteSettings }) => {

    const modalSignUp = useAppSelector((state) => state.modalSignUpReducer.modalSignUpState)

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        checkIsMobile()

        window.addEventListener('resize', checkIsMobile)

        return () => {
            window.removeEventListener('resize', checkIsMobile)
        }
    }, [])

    const modalSignUpContent = modalSignUp
        ?   <ModalSignUp cityId={settings.city_id}/>
        :   null

    return (
        <>
            {isMobile ? <MobileHeader settings={settings} /> : <Header settings={settings} />}
            <main>
                {modalSignUpContent}
                {children}
                <CustomTooltip/>
            </main>
            <Footer settings={settings}/>
        </>
    )
}