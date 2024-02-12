import { useState, useCallback } from 'react'

import { useDispatch } from 'react-redux'
import { setCustomTooltip } from '@/redux/features/customTooltipSlise'
import WTSServise from '@/services/WTSServise'

import {
    SButton,
    SFormContent,
    SH3,
    SInput,
    SLabel,
    STextContent,
    SSvgdiv,
    SPForm
} from './style'

export const SignUp = ({ cityId, specialistPage, specialist }: { cityId: number; specialistPage?: boolean; specialist?: number; }) => {

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
                const res = specialistPage
                    ? specialist ? await WTSServise.recordingToSpecialist(cityId.toString(), name, tel, specialist.toString()): null
                    : await WTSServise.signUp(cityId.toString(), name, tel)

                if(res && res.status === 200) {
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
        <>
            <STextContent>
                <SSvgdiv/>
                <SH3>
                    {specialistPage ? 'Записаться к данному мастеру' : 'Записаться на процедуру'}
                </SH3>
                <SPForm>
                    Оставьте свой номер телефона и мы запишем вас на процедуру
                </SPForm>
            </STextContent>
            <SFormContent>
                <SLabel>
                    Введите Ваше имя
                </SLabel>
                <SInput
                    type='text'
                    name='name'
                    value={name}
                    onChange={nameChange}
                    style={validName === null ? undefined : validName ? {'border': '1px solid #00CC99'}: {'border': '1px solid #EB5757'}}
                />
                <SLabel>
                    Введите Ваш контактный номер телефона
                </SLabel>
                <SInput
                    type='tel'
                    name='tel'
                    value={tel}
                    onChange={telChange}
                    onFocus={handleFocus}
                    style={validTel === null ? undefined : validTel ? {'border': '1px solid #00CC99'}: {'border': '1px solid #EB5757'}}
                />
                <SButton
                    type='submit'
                    background='#888184'
                    onClick={(e) => signUp(e)}
                >
                    Записаться
                </SButton>
            </SFormContent>
        </>
    )
}