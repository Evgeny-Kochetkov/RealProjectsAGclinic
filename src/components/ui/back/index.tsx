import { useRouter } from 'next/navigation'

import {
    SBackWrap,
    SBack
} from './style'

export const Back = ({white}: {white?: boolean}) => {

    const router = useRouter()

    return (
        <SBackWrap>
            <SBack
                href='#'
                onClick={() => router.back()}
                white={white}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                    <path
                        opacity="0.5"
                        d="M0.797677 2.53823L4.56151 0.701846C5.22579 0.377738 6 0.861441 6 1.60058V5.36441C6 6.112 5.20961 6.59524 4.54419 6.25449L0.780366 4.32704C0.0468631 3.95142 0.0570412 2.89959 0.797677 2.53823Z"
                        fill={white ? '#FFF' : '#120309'}
                    />
                </svg>
                <span>
                    Назад
                </span>
            </SBack>
        </SBackWrap>
    )
}