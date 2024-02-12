import Image from 'next/image'

import bgImg from '../../../../public/images/bg1.svg'

import {
    SSection,
    SGlobalWrap
} from './style'

export const Section = (
    {children, id, bgClass, bg}: 
    {
        children: React.ReactNode,
        id?: string,
        bgClass?: 'bg1' | 'bg2' | 'bg3' | 'bg4',
        bg?: string
    }) => {

    const bgContent1 = bgClass
        ?   <Image
                className={bgClass}
                src={bgImg}
                alt={'bg'}
                style={{'height': 'auto'}}
                width={299}
                height={187}
            />
        :   null

    return (
        <SSection id={id} bg={bg}>
            <SGlobalWrap>
                {bgContent1}
                {children}
            </SGlobalWrap>
        </SSection>
    )
}