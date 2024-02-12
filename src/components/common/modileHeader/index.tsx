import Link from 'next/link'
import Image from 'next/image'

import logo from '../../../../public/images/logo.svg'

import {
    useState,
    useCallback
} from 'react'

import { useDispatch } from 'react-redux'
import { useAppSelector } from '@/redux/store'
import { openMobileMenu, closeMobileMenu } from '@/redux/features/mobileMenuSlise'

import { Address } from '../../ui/address'
import { SocialLinks } from '../../ui/socialLinks'

import {
    SMobileHeader,
    SHamburger,
    SWrap,
    SSocialWrap,
    SMenu,
    SUl,
    SLi,
    SButton,
    SCategory,
    SBack
} from './style'

import { ISiteSettings } from '@/types/siteSettingsType'

export const MobileHeader = ({ settings }: { settings: ISiteSettings }) => {

    const dispatch = useDispatch()

    const mobileMenu = useAppSelector((state) => state.mobileMenuReducer.mobileMenuState)

    const [showCategory, setShowCategory] = useState(false)
    const [activeCategory, setActiveCategory] = useState<string | null>(null)
    const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null)
    const [showServises, setShowServises] = useState(false)

    const openMobileMenuClick = useCallback(() => {
        dispatch(openMobileMenu())
        document.body.style.overflow = 'hidden'
    }, [])
    
    const closeMobileMenuClick = useCallback(() => {
        dispatch(closeMobileMenu())
        document.body.style.overflow = 'auto'
    }, [])

    const clickMenuItem = useCallback((e: React.MouseEvent<HTMLUListElement>) => {
        const target = e.target as HTMLUListElement
        const id = target.id
        const dataCategory = target.getAttribute('data-category')
        if(id) {
            if(dataCategory === '1') {
                setActiveMenuItem(id)
                setShowCategory(true)
            } else {
                setActiveMenuItem(null)
                closeMobileMenuClick()
            }
        }
    }, [])

    const clickCategoryItem = useCallback((e: React.MouseEvent<HTMLUListElement>) => {
        const target = e.target as HTMLUListElement
        const id = target.id
        const dataCategory = target.getAttribute('data-category')
        if(id) {
            if(dataCategory === '1') {
                setActiveCategory(id)
                setShowServises(true)
            } else {
                setActiveCategory(null)
                closeMobileMenuClick()
            }
        }
    }, [])

    return (
        <SMobileHeader>
            <SWrap>
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
                <SHamburger
                    onClick={openMobileMenuClick}
                >
                    <span/>
                    <span/>
                    <span/>
                </SHamburger>
            </SWrap>
            <SWrap>
                <Address siteSettings={settings}/>
                <SSocialWrap>
                    <SocialLinks height={24} siteSettings={settings}/>
                </SSocialWrap>
            </SWrap>
            <SMenu show={mobileMenu}> 
                <SWrap>
                    <SHamburger 
                        className={'active'}
                        onClick={closeMobileMenuClick}
                    >
                        <span/>
                        <span/>
                        <span/>
                    </SHamburger>
                    <Address siteSettings={settings} mobileMenu/>
                </SWrap>
                <SUl onClick={(e) => clickMenuItem(e)}>
                    {settings.menu.sort((a, b) => a.order - b.order).map(({id, name, path, category}, i) => {
                        return (
                            <SLi key={id}>
                                {category && category.length
                                    ? <SButton id={path} data-category={category && category.length ? '1' : '0'}/* onClick={() => setShowCategory(true)} */>
                                        {name}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                                            <path opacity="0.5" d="M8.20232 5.99806L1.4385 9.29815C0.774206 9.62226 0 9.13856 0 8.39942L0 1.63559C0 0.887997 0.790388 0.404755 1.45581 0.745514L8.21963 4.20925C8.95314 4.58487 8.94296 5.6367 8.20232 5.99806Z" fill="white"/>
                                        </svg>
                                      </SButton>
                                    : <Link
                                        href={`/${path}`}
                                        id={path}
                                        data-category={category && category.length ? '1' : '0'}
                                        style={{'height': '100%', 'width': '100%'}}
                                      >
                                        {name}
                                      </Link>
                                }
                            </SLi>
                        )
                    })}
                </SUl>
                <SCategory show={showCategory}>
                    <SBack onClick={() => setShowCategory(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                            <path opacity="0.5" d="M0.797677 2.53823L4.56151 0.701846C5.22579 0.377738 6 0.861441 6 1.60058V5.36441C6 6.112 5.20961 6.59524 4.54419 6.25449L0.780366 4.32704C0.0468631 3.95142 0.0570412 2.89959 0.797677 2.53823Z" fill="white"/>
                        </svg>
                        <span>
                            Назад
                        </span>
                    </SBack>
                    <SUl onClick={(e) => clickCategoryItem(e)}>
                        {activeMenuItem ? settings.menu.filter((item) => item.path === activeMenuItem)[0].category?.map(({id, value, path, services}) => {
                            return (
                                <SLi key={id}>
                                    <SButton id={path} data-category={services && services.length ? '1' : '0'}>
                                        {value}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                                            <path opacity="0.5" d="M8.20232 5.99806L1.4385 9.29815C0.774206 9.62226 0 9.13856 0 8.39942L0 1.63559C0 0.887997 0.790388 0.404755 1.45581 0.745514L8.21963 4.20925C8.95314 4.58487 8.94296 5.6367 8.20232 5.99806Z" fill="white"/>
                                        </svg>
                                    </SButton>
                                </SLi>
                            )})
                            : null
                        }
                    </SUl>
                </SCategory>
                <SCategory show={showServises}>
                    <SBack onClick={() => setShowServises(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                            <path opacity="0.5" d="M0.797677 2.53823L4.56151 0.701846C5.22579 0.377738 6 0.861441 6 1.60058V5.36441C6 6.112 5.20961 6.59524 4.54419 6.25449L0.780366 4.32704C0.0468631 3.95142 0.0570412 2.89959 0.797677 2.53823Z" fill="white"/>
                        </svg>
                        <span>
                            Назад
                        </span>
                    </SBack>
                    <SUl>
                        {activeMenuItem && activeCategory 
                            ? settings.menu
                                .filter((item) => item.path === activeMenuItem)[0].category
                                .filter((item) => item.path === activeCategory)[0].services?.map(({id, title, path}) => {
                            return (
                                <SLi key={id}>
                                    <Link
                                        href={`/services/${path}`}
                                        id={path}
                                        style={{'height': '100%', 'width': '100%'}}
                                        onClick={() => closeMobileMenuClick()}
                                    >
                                        {title}
                                    </Link>
                                </SLi>
                            )
                            })
                            : null
                        }
                    </SUl>
                    </SCategory>
            </SMenu>
        </SMobileHeader>
    )
}