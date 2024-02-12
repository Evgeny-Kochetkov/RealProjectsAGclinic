import {
    useState,
    useRef,
    useCallback
} from 'react'

import { useDispatch } from 'react-redux'
import { closeModalSignUp } from '@/redux/features/modalSignUpSlise'
import { setCustomTooltip } from '@/redux/features/customTooltipSlise'
import WTSServise from '@/services/WTSServise'

import {
    SModal,
    SWrap,
    SCloseBtn,
    SInput
} from './style'
import {
    SH2
} from '../../common/uniqueServices/style'
import { SButton } from '../../common/reviewsContent/style'

export const ModalSignUp = ({cityId}: { cityId: number; }) => {

    const dispatch = useDispatch()

    const modalRef = useRef<HTMLDivElement>(null)

    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [procedure, setProcedure] = useState('')
    const [validName, setValidName] = useState<boolean | null>(null)
    const [validTel, setValidTel] = useState<boolean | null>(null)
    const [validProcedure, setValidProcedure] = useState<boolean | null>(null)
    const [valueValidName, setValueValidName] = useState<string | null>(null)
    const [valueValidTel, setValueValidTel] = useState<string | null>(null)
    const [valueValidProcedure, setValueValidProcedure] = useState<string | null>(null)
    
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

    const checkValidProcedure = useCallback((s: string) => {
        if(s === '') {
            setValidProcedure(false)
            setValueValidProcedure('Пустое поле процедуры')
            return
        }

        setValidProcedure(true)
        setValueValidProcedure(null)
    }, [])

    const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        checkValidName(e.target.value)
    }

    const telChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTel(e.target.value)
        checkValidTel(e.target.value)
    }

    const procedureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProcedure(e.target.value)
        checkValidProcedure(e.target.value)
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

        if (validProcedure === null) {
            checkValidProcedure(procedure)
        }
        
        if(validName && validTel && validProcedure) {
            try {
                const res = await WTSServise.signUp(cityId.toString(), name, tel, procedure)
                if(res.status === 200) {
                    dispatch(setCustomTooltip({status: 'success', titleText: 'Спасибо!', text: 'Мы получили вашу заявку и свяжемся с вами в ближайшее время.'}))
                    setName('')
                    setValidName(null)
                    setTel('')
                    setValidTel(null)
                    setProcedure('')
                    setValidProcedure(null)
                    dispatch(closeModalSignUp())
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
            if (!validProcedure && valueValidProcedure) {
                dispatch(setCustomTooltip({status: 'notice', titleText: 'Уведомление', text: valueValidProcedure}))
                return
            }
        }
    }

    const closeModalEmptyArea = (event: React.MouseEvent) => {
        if (!modalRef.current) return
        const target = event.target as HTMLElement

        if (!modalRef.current.contains(target) && modalRef.current) {
            dispatch(closeModalSignUp())
        }
    }

    return (
        <SModal
            onClick={closeModalEmptyArea}
        >
            <SWrap
                ref={modalRef}
            >
                <SCloseBtn
                    onClick={() => dispatch(closeModalSignUp())}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <path d="M12.834 12.8333L31.1673 31.1667M12.834 31.1667L31.1673 12.8333" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </SCloseBtn>
                <SH2
                    style={{'maxWidth': '347px'}}
                >
                    Записаться на процедуру 
                </SH2>
                <form>
                    <SInput
                        type='text'
                        name='name'
                        placeholder='Введите Ваше имя'
                        value={name}
                        onChange={nameChange}
                        style={validName === null ? {'marginTop': '40px'} : validName ? {'border': '1px solid #00CC99', 'marginTop': '40px'}: {'border': '1px solid #EB5757', 'marginTop': '40px'}}
                    />
                    <SInput
                        type='text'
                        name='phone'
                        placeholder='Введите Ваш номер телефона'
                        value={tel}
                        onChange={telChange}
                        onFocus={handleFocus}
                        style={validTel === null ? undefined : validTel ? {'border': '1px solid #00CC99'}: {'border': '1px solid #EB5757'}}
                    />
                    <SInput
                        type='text'
                        name='procedure'
                        placeholder='Введите название процедуры'
                        value={procedure}
                        onChange={procedureChange}
                        style={validProcedure === null ? undefined : validProcedure ? {'border': '1px solid #00CC99'}: {'border': '1px solid #EB5757'}}
                    />
                    <SButton
                        type='submit'
                        marginTop='40px'
                        onClick={(e) => signUp(e)}
                    >
                        Записаться
                    </SButton>
                </form>
            </SWrap>
        </SModal>
    )
}