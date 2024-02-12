'use client'

import Link from 'next/link'
import Image from 'next/image'

import {
    useCallback,
    useEffect
} from 'react'

import { Section } from '../../ui/section'

import bonnet from '../../../../public/images/bonnet.svg'
import yoga from '../../../../public/images/yoga.svg'
import image3DTour from '../../../../public/images/image3DTour.jpg'

import {
    SWhyChooseUsWrap,
    SWhyChooseUsBlock,
    SWrap,
    SImgBlock,
    SHr,
    SPCenter,
    SP,
    SSuccessesInNum,
    SNumBlock,
    SNum,
    SContentLink
} from './style'

import { SH2 } from '../uniqueServices/style'

const WhyChooseUs = () => {

    useEffect(() => {
        let executed = false
        const targetBlock = document.getElementById('about')!

        const handleScroll = () => {
            const scrollPosition = window.scrollY
            if (scrollPosition >= targetBlock.offsetTop && !executed) {
                outNum(10, 'out-1', 1, 2000, true, 2)
                outNum(200, 'out-2', 1, 2000, true, 3)
                outNum(7, 'out-3', 1, 2000, false, 1)
                outNum(10, 'out-4', 1, 2000, false, 2)
                executed = true
            }
        }
      
        window.addEventListener('scroll', handleScroll)
      
        return () => {
           window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const outNum = useCallback((num: number, elem: string, step: number, time: number, plus: boolean, q: number) => {
        const l = document.querySelector('#' + elem)
        let n = 0
        let t = Math.round(time/(num/step))
        let interval = setInterval(() => {
            n = n + step
            if (n === num) {
                clearInterval(interval)
            }
            if (l) {
                l.innerHTML = n.toString().padStart(q, '0') + (plus ? '+' : '')
            }
        }, t)
    }, [])

    return (
        <Section id='about'>
            <SWhyChooseUsWrap>
                <SWrap>
                    <SWhyChooseUsBlock>
                        <SH2>
                            Почему выбирают нас
                        </SH2>
                        <SHr/>
                        <SPCenter>
                            Сказка возможна, но сказку делают люди, это мы с Вами. Ваш внутренний мир и желание преобразиться, плюс наши знания и опыт работы в эстетической медицине сделают сказку былью. 
                        </SPCenter>
                        <SP>
                            <Image
                                src={bonnet}
                                alt='bonnet'
                                height={44}
                                width={44}
                                style={{'width': 'auto'}}
                            />
                            Мы обладаем большим багажом знаний, умений и необходимого оборудования. Но этим мы не отличаемся от других клиник
                        </SP>
                        <SP>
                            <Image
                                src={yoga}
                                alt='yoga'
                                height={44}
                                width={44}
                                style={{'width': 'auto'}}
                            />
                            Основная задача, которую наша команда ставит перед собой, это помочь каждому из Вас найти гармонию со своим телом, и подчеркнуть естественную, зачастую скрытую от глаз, индивидуальность.
                        </SP>
                    </SWhyChooseUsBlock>
                </SWrap>
                <SImgBlock>
                    <Image
                        src={image3DTour}
                        alt='image 3D tour'
                        width={440}
                        height={513}
                        quality={100}
                        priority
                        style={{'borderRadius': '0 300px 0 0'}}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
                    />
                    <Link href='http://agcosmetology.com.ua/tour.html'>
                        <SContentLink>
                            3D - тур
                        </SContentLink>
                    </Link>
                </SImgBlock>
            </SWhyChooseUsWrap>
            <SSuccessesInNum>
                <SNumBlock>
                    <SNum id='out-1'>
                        00+
                    </SNum>
                    <SP>
                        Высококвалифицированных врачей проходивших обучение в Европе и Азии
                    </SP>
                </SNumBlock>
                <SNumBlock>
                    <SNum id='out-2'>
                        000+
                    </SNum>
                    <SP>
                        Довольных пациентов,<br/> которые возвращаются к нам снова
                    </SP>
                </SNumBlock>
                <SNumBlock
                    style={{'minWidth': '125px'}}
                >
                    <SNum id='out-3'>
                        0
                    </SNum>
                    <SP>
                        Лет успешной работы
                    </SP>
                </SNumBlock>
                <SNumBlock>
                    <SNum id='out-4'>
                        00
                    </SNum>
                    <SP>
                        Самых современных, инновационных аппаратов
                    </SP>
                </SNumBlock>
            </SSuccessesInNum>
        </Section>
    )
}

export default WhyChooseUs