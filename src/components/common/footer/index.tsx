'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useState, useCallback } from 'react'

import { useDispatch } from 'react-redux'
import { setCustomTooltip } from '@/redux/features/customTooltipSlise'
import WTSServise from '@/services/WTSServise'

import { Address } from '../../ui/address'
import { SocialLinks } from '../../ui/socialLinks'

import logo from '../../../../public/images/logo.svg'
import watchWhite from '../../../../public/images/watchWhite.svg'
import phoneWhite from '../../../../public/images/phoneWhite.svg'
import locationSharp from '../../../../public/images/locationSharp.svg'

import {
    SFooter,
    SWrapFooter,
    SInfoBlock,
    SInfoWrap,
    SPhone,
    SBold,
    SUl,
    SP,
    SInput,
    SForm,
    SSocialLinkWrap,
    SBottomFooter,
    SButton,
    SPhonesWrap,
    SPolicy,
    SH3
} from './style'

import { ISiteSettings } from '@/types/siteSettingsType'

export const Footer = ({ settings }: { settings: ISiteSettings }) => {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [validName, setValidName] = useState<boolean | null>(null)
    const [validTel, setValidTel] = useState<boolean | null>(null)
    const [valueValidName, setValueValidName] = useState<string | null>(null)
    const [valueValidTel, setValueValidTel] = useState<string | null>(null)
    
    const checkValidName = useCallback((s: string) => {
        if(s === '') {
            setValidName(false)
            setValueValidName('Пустое поле имя')
            return
        }

        const validFormat = /^[a-zA-Zа-яА-Я\s]+$/
        if (!validFormat.test(s)) {
            setValidName(false)
            setValueValidName('Недопустимые символы в имени')
            return
        }

        setValidName(true)
        setValueValidName(null)
    }, [])

    const checkValidTel = useCallback((s: string) => {
        if(s === '') {
            setValidTel(false)
            setValueValidTel('Пустое поле телефона')
            return
        }
        
        const validFormat = /^(\+7|7)?(\s*\(\d{3}\)\s*|\s*\d{3}\s*)\d{3}\s*\d{2}\s*\d{2}$/

        if (!validFormat.test(s)) {
            setValidTel(false)
            setValueValidTel('Неверный формат телефона')
            return
        }

        setValidTel(true)
        setValueValidTel(null)
    }, [])

    const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        checkValidName(e.target.value)
    }

    const telChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTel(e.target.value)
        checkValidTel(e.target.value)
    }

    const handleFocus = () => {
        if (tel === '') {
            setTel('+7')
        }
    }

    const signUp = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (validName === null) {
            checkValidName(name)
        }

        if (validTel === null) {
            checkValidTel(tel)
        }
        
        if(validName && validTel) {
            try {
                const res = await WTSServise.signUp(settings.city_id.toString(), name, tel/* .replace(/\D/g, '') */)
                if(res.status === 200) {
                    dispatch(setCustomTooltip({status: 'success', titleText: 'Спасибо!', text: 'Мы получили вашу заявку и свяжемся с вами в ближайшее время.'}))
                    setName('')
                    setValidName(null)
                    setTel('')
                    setValidTel(null)
                }
                
            } catch(e) {
                console.log(e)
                dispatch(setCustomTooltip({status: 'error', titleText: 'Ошибка', text: 'Откройте консоль чтобы узнать код ошибки.'}))
            }
        } else {
            if (!validName && valueValidName) {
                dispatch(setCustomTooltip({status: 'notice', titleText: 'Уведомление', text: valueValidName}))
                return
            }
            if (!validTel && valueValidTel) {
                dispatch(setCustomTooltip({status: 'notice', titleText: 'Уведомление', text: valueValidTel}))
                return
            }
        }
    }

    return (
        <SFooter>
            <SWrapFooter>
                <SInfoBlock>
                    <Link href='/'> 
                        <Image
                            src={logo}
                            alt='AG clinic logo'
                            height={100}
                            width={177.393}
                            style={{'width': 'auto'}}
                        />
                    </Link>
                    <SInfoWrap>
                        <Image 
                            src={watchWhite}
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
                                {settings?.schedule}: {settings?.start_schedule} - {settings?.end_schedule}
                            </time>
                        </div>
                    </SInfoWrap>
                    <SInfoWrap>
                        <Image 
                            src={phoneWhite}
                            alt='phone'
                            height={24}
                            width={24}
                            style={{'width': 'auto'}}
                        />
                        <SPhonesWrap>
                            {settings?.phone.map((item, i) => (
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
                                {settings?.short_phone.map((item, i) => (
                                    <SBold
                                        key={i}
                                        href={`tel:${item}`}
                                    >
                                        {item}{settings.short_phone.length && settings.short_phone.length > 1 && settings.short_phone.length !== i + 1 ? ',' : null}
                                    </SBold>
                                ))}
                            </p>
                        </SPhonesWrap>
                    </SInfoWrap>
                    <SInfoWrap>
                        <Image 
                            src={locationSharp}
                            alt='location'
                            height={24}
                            width={24}
                            style={{'width': 'auto'}}
                        />
                        <Address siteSettings={settings} footer/>
                    </SInfoWrap>
                </SInfoBlock>
                <SInfoBlock>
                    <SUl>
                        <li>
                            <SH3>
                                О клинике
                            </SH3>
                        </li>
                        <li>
                            <Link
                                href='/vacancies'
                                style={{'fontSize': '20px'}}
                            >
                                Вакансии
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/reviews'
                                style={{'fontSize': '20px'}}
                            >
                                Отзывы
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/partners'
                                style={{'fontSize': '20px'}}
                            >
                                Партнеры
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/document'
                                style={{'fontSize': '20px', 'fontWeight': '700'}}
                            >
                                Документы клиники
                            </Link>
                        </li>
                    </SUl>
                </SInfoBlock>
                <SInfoBlock>
                    <SP>
                        Записаться на консультацию:
                    </SP>
                    <SForm>
                        <SInput
                            type='text'
                            placeholder='Введите Ваше имя'
                            name='name'
                            value={name}
                            onChange={nameChange}
                            style={validName === null ? undefined : validName ? {'border': '1px solid #00CC99'}: {'border': '1px solid #EB5757'}}
                        />
                        <SInput
                            type='tel'
                            placeholder='+7 (949) 999 99 99'
                            name='tel'
                            value={tel}
                            onChange={telChange}
                            onFocus={handleFocus}
                            style={validTel === null ? undefined : validTel ? {'border': '1px solid #00CC99'}: {'border': '1px solid #EB5757'}}
                        />
                        <SButton
                            type='submit'
                            onClick={(e) => signUp(e)}
                        >
                            Записаться
                        </SButton>
                    </SForm>
                </SInfoBlock>
                <SInfoBlock>
                    <SSocialLinkWrap>
                    <SocialLinks height={32} siteSettings={settings}/>
                    </SSocialLinkWrap>
                </SInfoBlock>
            </SWrapFooter>
            <SBottomFooter>
                <SPolicy>
                    {`Анна Григорьевна © ${new Date().getFullYear()} Все права защищены`}
                    <br/>
                    <a href='https://webteamstorm.ru' target='_blank' rel='noopener noreferrer nofollow'>Сайт разработан студией WebTeamStorm</a>
                </SPolicy>
                <Link
                    href='/privacy_policy'
                >
                    Политика конфиденциальности
                </Link>
            </SBottomFooter>
        </SFooter>
    )
}