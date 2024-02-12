'use client'

import { useCallback } from 'react'

import { useDispatch } from 'react-redux'

import {
    useState,
    useRef
} from 'react'

import WTSServise from '@/services/WTSServise'
import { setCustomTooltip } from '@/redux/features/customTooltipSlise'

import { Section } from '../../ui/section'
import { Back } from '../../ui/back'
import { Title } from '../../ui/title'
import { Slider } from '../../ui/slider'

import fallback from '../../../../public/images/fallback.jpg'

import {
    SAvatarWrap,
    SReviews,
    SCard,
    SName,
    SComment,
    SWrap,
    SCloseBtn,
    SInput,
    STextareaContainer,
    STextarea,
    SLabel,
    SSpan,
    SBtnWrap,
    SButton
} from './style'
import {
    SH2
} from '../uniqueServices/style'

import { SModal } from '../documentContent/style'

import { IReviews } from '@/types/reviewsType'

export const ReviewsContent = ({ reviews, cityId, apiUrl }: { reviews: IReviews[]; cityId: number; apiUrl: string; }) => {

    const dispatch = useDispatch()

    const modalRef = useRef<HTMLDivElement>(null)

    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [fileName, setFileName] = useState('Прикрепить аватар')
    const [validUsername, setValidUsername] = useState<boolean | null>(null)
    const [valueValidUsername, setValueValidUsername] = useState<string | null>(null)
    const [validReview, setValidReview] = useState<boolean | null>(null)
    const [valueValidReview, setValueValidReview] = useState<string | null>(null)
    
    const checkValidUsername = useCallback((s: string) => {
        if(s === '') {
            setValidUsername(false)
            setValueValidUsername('Пустое имя')
            return
        }

        setValidUsername(true)
        setValueValidUsername(null)
    }, [])

    const checkValidComment = useCallback((s: string) => {
        if(s === '') {
            setValidReview(false)
            setValueValidReview('Пустой комментарий')
            return
        }

        setValidReview(true)
        setValueValidReview(null)
    }, [])

    const fileNameChange = (e: any) => {
        const file = e.target.files[0]
        setFileName(file ? file.name : 'Прикрепить аватар')
    }

    const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        checkValidUsername(e.target.value)
    }

    const commentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value)
        checkValidComment(e.target.value)
    }

    const openModal = () => {
        setShowModal(true)
        /* document.body.style.overflow = 'hidden' */
    }

    const closeModal = () => {
        setShowModal(false)
        /* document.body.style.overflow = 'auto' */
    }

    const closeModalEmptyArea = (event: React.MouseEvent) => {
        if (!modalRef.current) return
        const target = event.target as HTMLElement

        if (!modalRef.current.contains(target) && modalRef.current) {
            closeModal()
        }
    }

    const leaveReview = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (validUsername === null) {
            checkValidUsername(name)
        }

        if (validReview === null) {
            checkValidComment(comment)
        }
        
        if(validUsername && validReview) {
            try {
                const fileInput = document.getElementById('avatar') as HTMLInputElement
                if (fileInput && cityId) {
                    const file = fileInput.files?.[0]
                    const res = await WTSServise.addComment(cityId.toString(), name, comment, file)
                    if(res.status === 200) {
                        dispatch(setCustomTooltip({status: 'success', titleText: 'Успешно', text: 'Ваш отзыв успешно отправлен.'}))
                        setName('')
                        setValidUsername(null)
                        setComment('')
                        setValidReview(null)
                        fileInput.files = null
                        setFileName('Прикрепить аватар')
                        closeModal()
                    }
                }
            } catch {
                dispatch(setCustomTooltip({status: 'error', titleText: 'Ошибка', text: 'Откройте консоль чтобы узнать код ошибки.'}))
            }
        }
        
    }

    const renderModal = showModal
        ?   <SModal
                onClick={closeModalEmptyArea}
            >
                <SWrap
                    ref={modalRef}
                >
                    <SCloseBtn
                        onClick={closeModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <path d="M12.834 12.8333L31.1673 31.1667M12.834 31.1667L31.1673 12.8333" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </SCloseBtn>
                    <SH2>
                        Оставить отзыв
                    </SH2>
                    <form>
                        <SInput
                            type='text'
                            name='name'
                            placeholder='Введите Ваше имя'
                            value={name}
                            onChange={nameChange}
                            style={validUsername === null ? undefined : validUsername ? {'border': '1px solid #00CC99'}: {'border': '1px solid #EB5757'}}
                        />
                        <STextareaContainer
                            style={validReview === null ? undefined : validReview ? {'border': '1px solid #00CC99'}: {'border': '1px solid #EB5757'}}
                        >
                            <STextarea
                                name='comment'
                                placeholder='Опишите Ваши впечатления'
                                value={comment}
                                onChange={commentChange}
                            />
                        </STextareaContainer>
                        <SLabel htmlFor='avatar'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M24.3532 6.14375C21.4094 3.2 16.6157 3.2 13.675 6.14375L5.51878 14.2937C5.46565 14.3469 5.43753 14.4187 5.43753 14.4937C5.43753 14.5687 5.46565 14.6406 5.51878 14.6937L6.6719 15.8469C6.72461 15.8994 6.79596 15.9288 6.87034 15.9288C6.94472 15.9288 7.01607 15.8994 7.06878 15.8469L15.225 7.69687C16.2375 6.68437 17.5844 6.12812 19.0157 6.12812C20.4469 6.12812 21.7938 6.68437 22.8032 7.69687C23.8157 8.70937 24.3719 10.0562 24.3719 11.4844C24.3719 12.9156 23.8157 14.2594 22.8032 15.2719L14.4907 23.5812L13.1438 24.9281C11.8844 26.1875 9.83753 26.1875 8.57815 24.9281C7.96878 24.3187 7.6344 23.5094 7.6344 22.6469C7.6344 21.7844 7.96878 20.975 8.57815 20.3656L16.825 12.1219C17.0344 11.9156 17.3094 11.8 17.6032 11.8H17.6063C17.9 11.8 18.1719 11.9156 18.3782 12.1219C18.5875 12.3312 18.7 12.6062 18.7 12.9C18.7 13.1906 18.5844 13.4656 18.3782 13.6719L11.6375 20.4062C11.5844 20.4594 11.5563 20.5312 11.5563 20.6062C11.5563 20.6812 11.5844 20.7531 11.6375 20.8062L12.7907 21.9594C12.8434 22.0119 12.9147 22.0413 12.9891 22.0413C13.0635 22.0413 13.1348 22.0119 13.1875 21.9594L19.925 15.2219C20.5469 14.6 20.8875 13.775 20.8875 12.8969C20.8875 12.0187 20.5438 11.1906 19.925 10.5719C18.6407 9.2875 16.5532 9.29062 15.2688 10.5719L14.4688 11.375L7.02503 18.8156C6.51981 19.3179 6.11934 19.9154 5.84683 20.5736C5.57432 21.2318 5.43519 21.9376 5.43753 22.65C5.43753 24.0969 6.00315 25.4562 7.02503 26.4781C8.0844 27.5344 9.4719 28.0625 10.8594 28.0625C12.2469 28.0625 13.6344 27.5344 14.6907 26.4781L24.3532 16.8219C25.775 15.3969 26.5625 13.5 26.5625 11.4844C26.5657 9.46562 25.7782 7.56875 24.3532 6.14375Z" fill="black"/>
                            </svg>
                            <SSpan>
                                {fileName}
                            </SSpan>
                            <input type='file' id='avatar' name='avatar' style={{'display': 'none'}} onChange={fileNameChange}/>
                        </SLabel>
                        <SBtnWrap>
                            <SButton
                                type='submit'
                                marginTop='20px'
                                onClick={(e) => leaveReview(e)}
                            >
                                Отправить
                            </SButton>
                        </SBtnWrap>
                    </form>
                </SWrap>
            </SModal>
        : null

    return (
        <Section
            bgClass='bg4'
        >
            {renderModal}
            <Back/>
            <Title text='Отзывы наших любимых клиентов'/>
            <Slider numDisplayedSlides={1} showDots={true} numItemOnPage={2}>
                {reviews.map(({id, img, name, description}, i) => (
                    <SAvatarWrap
                        key={id}
                        style={{
                            'flex': '1 0 100%',
                            'scrollSnapAlign': 'start'
                        }}
                    >   
                        <SReviews i={i}>
                            <SCard i={i}>
                                <img
                                    src={img ? `${apiUrl}/public/uploads/images/${img}?width=200&quality=90` : fallback.src}
                                    alt='avatar'
                                    width={200}
                                    height={200}
                                />
                                <SName>
                                    {name}
                                </SName>
                                <SComment>
                                    {description}
                                </SComment>
                            </SCard>
                        </SReviews>
                    </SAvatarWrap>
                ))}
            </Slider>
            <SButton
                marginTop='40px'
                onClick={openModal}
            >
                Добавить отзыв
            </SButton>
        </Section>
    )
}