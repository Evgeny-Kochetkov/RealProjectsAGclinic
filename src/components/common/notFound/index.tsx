'use client'

import Image from 'next/image'
import Link from 'next/link'

import NotFoundPng from '../../../../public/images/notFound.png'
import NotFoundBG1 from '../../../../public/images/notFoundBG.svg'

import {
    Scontentrap,
    SH1,
    SH2,
    SP,
    SContentLink,
    SHr
} from './style'

export const NotFound = () => (
    <section>
        <Scontentrap>
            <Image
                src={NotFoundBG1}
                alt='404'
                width={494}
                height={554}
                style={{
                    'position': 'absolute',
                    'left': '0',
                    'top': '50%',
                    'transform': 'translateY(-40%) scaleX(-1)'
                }}
            />
            <Image
                src={NotFoundBG1}
                alt='404'
                width={494}
                height={554}
                style={{
                    'position': 'absolute',
                    'right': '0',
                    'top': '50%',
                    'transform': 'translateY(-40%)'
                }}
            />
            <SH1>
                404
                <Image
                    src={NotFoundPng}
                    alt='404'
                    width={460.48}
                    height={222.56}
                    style={{'objectFit': 'contain'}}
                />
            </SH1>
            <SH2>
                Ошибка
            </SH2>
            <SP>
                К сожалению запрашиваемая Вами страница не найдена 
            </SP>
            <SHr/>
            <Link href='/'>
                <SContentLink>
                    На главную
                </SContentLink>
            </Link>
        </Scontentrap>
    </section>
)