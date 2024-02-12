'use client'

import {
    useState,
    useRef
} from 'react'

import { Section } from '../../ui/section'
import { Back } from '../../ui/back'
import { Title } from '../../ui/title'
import { Slider } from '../../ui/slider'

import {
    SDocument,
    SName,
    SDesc,
    SModal,
    SImgWrap,
    SWrapBtn
} from './style'
import { IDocument } from '@/types/documentType'

export const DocumentContent = ({ documents, apiUrl }: { documents: IDocument[]; apiUrl: string; }) => {
    const modalRef = useRef<HTMLDivElement>(null)

    const [showModal, setShowModal] = useState(false)
    const [pageDoc, setPageDoc] = useState(0)
    const [imgArr, setImgArr] = useState<string[] | null>(null)
    
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
                            style={{'objectFit': 'contain'}}
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
        <Section
            bgClass='bg3'
        >
            {renderModalImg}
            <Back/>
            <Title text='Наши документы'/>
            <Slider numDisplayedSlides={1} showDots={true} numItemOnPage={3}>
                {documents?.map(({id, img, title, description}) => (
                    <SDocument
                        key={id}
                        style={{
                            'flex': '1 0 100%',
                            'scrollSnapAlign': 'start',
                            'overflow': 'hidden'
                        }}
                    >
                        <img
                            src={`${apiUrl}/public/uploads/images/${img[0]}?width=420&quality=90`}
                            alt='document'
                            width={420}
                            height={594}
                            onClick={() => handleImageClick(img)}
                            style={{'maxHeight': '594px'}}
                        />
                        <SName>
                            {title}
                        </SName>
                        <SDesc>
                            {description}
                        </SDesc>
                    </SDocument>
                ))}
            </Slider>
        </Section>
    )
}