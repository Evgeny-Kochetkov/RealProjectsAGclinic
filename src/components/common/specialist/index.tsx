'use client'

import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import ReactPlayer from 'react-player'

import {
    useState,
    useRef
} from 'react'

import { Back } from '../../ui/back'
import { BeforeAfterSlider } from '../../ui/afterBeforeImg'
import { FormWrapper } from '../../ui/formWrapper'
import { Slider } from '../../ui/slider'
import { SignUp } from '../../ui/signUp'

import bgImg from '../../../../public/images/bg1.svg'

import {
    SH1,
    SBGBlock,
    SSpecialistContent,
    SInfoBlock,
    SBlurBlock,
    SP,
    STabButtonWrap,
    STabBtn,
    SPBlack,
    SWrap,
    SUl,
    SLi,
    SBeforeAfrerName,
    SDot,
    SNoInfo,
    SCertificate,
    SVideo
} from './style'
import {
    SSection,
    SPaddingWrap
} from '../servise/style'
import {
    SBlock
} from '../specialists/style'
import {
    SModal,
    SImgWrap,
    SWrapBtn
} from '../documentContent/style'

import { ISpecialists } from '../../../types/specialistsType'

export const Specialist = ({ specialist, cityId, apiUrl }: { specialist: ISpecialists; cityId: number; apiUrl: string; }) => {
    
    const modalRef = useRef<HTMLDivElement>(null)

    const [showModal, setShowModal] = useState(false)
    const [pageDoc, setPageDoc] = useState(0)
    const [imgArr, setImgArr] = useState<string[] | null>(null)
    const [activeTab, setActiveTab] = useState<1 | 2 | 3>(1)
    
    const handleImageClick = (img: string[]) => {
        setImgArr(img)
        setShowModal(true)
        /* document.body.style.overflow = 'hidden' */
    }

    const closeModalEmptyArea = (event: React.MouseEvent) => {
        if (!modalRef.current) return
        const target = event.target as HTMLElement

        if (!modalRef.current.contains(target) && modalRef.current) {
            closeModal()
        }
    }

    const left = () => {
        if(imgArr) {
            setPageDoc((state) => (state > 0 && state <= imgArr.length) ? state - 1 : state)
        }
    }

    const right = () => {
        if(imgArr) {
            setPageDoc((state) => (state >= 0 && state < imgArr.length - 1) ? state + 1 : state)
        }
    }

    const closeModal = () => {
        setShowModal(false)
        setImgArr(null)
        setPageDoc(0)
        /* document.body.style.overflow = 'auto' */
    }

    const renderModalImg = showModal
        ?   <SModal
                onClick={closeModalEmptyArea}
            >
                <SImgWrap
                    ref={modalRef}
                >
                    <SWrapBtn
                        onClick={closeModal}
                        position='rightTop'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M9.33398 9.33331L22.6673 22.6666M9.33398 22.6666L22.6673 9.33331" stroke="black" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </SWrapBtn>
                    {imgArr ?
                        <img
                            src={`${apiUrl}/public/uploads/images/${imgArr[pageDoc]}?width=658&quality=90`}
                            alt='document'
                            width={658}
                            height={930}
                        /> : null
                    }
                    {pageDoc === 0 && imgArr && imgArr.length > 1 ?
                        <SWrapBtn
                            onClick={right}
                            position='rightCenter'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M12 6L21.3333 16.1818L12 26.3636" stroke="black" strokeWidth="4.24242" strokeLinecap="round"/>
                            </svg>
                        </SWrapBtn>
                        : null
                    }
                    {pageDoc ?
                        <SWrapBtn
                            position='leftCenter'
                            onClick={left}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M20 6L10.6667 16.1818L20 26.3636" stroke="black" strokeWidth="4.24242" strokeLinecap="round"/>
                            </svg>
                        </SWrapBtn> : null
                    }
                </SImgWrap>
            </SModal>
        : null
    
    return (
        <SSection>
            {renderModalImg}
            <SPaddingWrap>
                <Image
                    className='bg3'
                    src={bgImg}
                    alt={'bg'}
                    style={{'height': 'auto'}}
                    width={1440}
                    height={650}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
                />
                <Back/>
                <SH1>
                    {specialist?.fio}
                </SH1>
            </SPaddingWrap>
            <SBGBlock>
                <SSpecialistContent>
                    <img
                        src={`${apiUrl}/public/uploads/images/${specialist?.main_img}?width=503&quality=90`}
                        alt='photo'
                        height={684}
                        width={503}
                        style={{'width': 'auto', 'height': '100%', 'objectFit': 'contain', 'objectPosition': 'left bottom'}}
                    />
                    <SInfoBlock>
                        <SBlurBlock dangerouslySetInnerHTML={{ __html: specialist?.biography }}/>
                        <STabButtonWrap>
                            <STabBtn
                                className={activeTab === 1 ? 'active' : undefined}
                                onClick={() => setActiveTab(1)}
                            >
                                О специалисте
                            </STabBtn>
                            <STabBtn
                                className={activeTab === 2 ? 'active' : undefined}
                                onClick={() => setActiveTab(2)}
                            >
                                Специализация
                            </STabBtn>
                            <STabBtn
                                className={activeTab === 3 ? 'active' : undefined}
                                onClick={() => setActiveTab(3)}
                            >
                                До/После
                            </STabBtn>
                        </STabButtonWrap>
                    </SInfoBlock>
                </SSpecialistContent>
            </SBGBlock>
            {
                activeTab === 1 && specialist
                ?
                <SPaddingWrap>
                    <SPBlack dangerouslySetInnerHTML={{ __html: specialist?.main_description }}/>
                    {specialist.certificate ? 
                        <>
                            <SVideo>
                                {specialist.certificate.filter((item) => item.status === 1).map(({id, url}) =>
                                    typeof(url) === 'string' ? <ReactPlayer key={id} url={url} controls width="100%" style={{'maxWidth': '600px'}} /> : null
                                )}
                            </SVideo>
                            <SCertificate>
                                {specialist.certificate.filter((item) => item.status === 0).map(({id, url}) => 
                                    (Array.isArray(url) ?
                                        <img
                                            key={id}
                                            src={`${apiUrl}/public/uploads/images/${url[0]}?width=420&quality=90`}
                                            alt='certificate'
                                            height={300}
                                            width={420}
                                            style={{'height': 'auto'}}
                                            onClick={() => handleImageClick(url)}
                                        /> : null)
                                )}
                            </SCertificate>
                        </>
                        : null
                    }
                </SPaddingWrap>
                :
                null
            }
            {
                activeTab === 2 && specialist && specialist?.specializations && specialist?.specializations.length
                ?
                <SPaddingWrap>
                    <SWrap>
                        <SUl>
                            {specialist?.specializations.map(({title, path}, i) => (
                                <SLi key={i}>
                                    <SDot/>
                                    <Link
                                        href={`/services/${path}`}
                                        style={{'textDecoration': 'underline'}}
                                    >
                                        {title}
                                    </Link>
                                </SLi>
                            ))}
                        </SUl>
                    </SWrap>
                </SPaddingWrap>
                :
                null
            }
            {
                activeTab === 3 && specialist && specialist?.beforeAfter && specialist?.beforeAfter.length
                ?
                <Slider numDisplayedSlides={1} showDots={true}>
                    {specialist?.beforeAfter.map(({title, after_img, before_img}, i) => {
                        const width = window.innerWidth <= 320 ? 280 : 310
                        return (
                            <SBlock key={i}
                                style={{
                                    'flex': '1 0 100%',
                                    'scrollSnapAlign': 'start',
                                    'borderRadius': '10px',
                                    'overflow': 'hidden'
                                }}
                            >
                                <div
                                    style={{
                                        'display': 'grid',
                                        'placeItems': 'center'
                                    }}
                                >
                                    <BeforeAfterSlider
                                        widthProp={width}
                                        before={`${apiUrl}/public/uploads/images/${before_img}`}
                                        after={`${apiUrl}/public/uploads/images/${after_img}`}
                                        i={i}
                                    />
                                    <SBeforeAfrerName>
                                        {title}
                                    </SBeforeAfrerName>
                                </div>
                            </SBlock>
                        )
                    })}
                </Slider>
                :
                null
            }
            {
                (activeTab === 3 && specialist?.beforeAfter.length === 0) || (activeTab === 2 && specialist?.specializations.length === 0) ?
                <SNoInfo>
                    <span>
                        Информация еще не добавлена.
                    </span>
                </SNoInfo> : null
            }
            <SPaddingWrap>
                <FormWrapper mainPage={true}>
                    <SignUp cityId={cityId} specialistPage={true} specialist={specialist?.id}/>
                </FormWrapper>
            </SPaddingWrap>
        </SSection>
    )
}