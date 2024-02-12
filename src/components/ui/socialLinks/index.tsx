import Image from 'next/image'

import { useMemo } from 'react'

import { ISiteSettings } from '../../../types/siteSettingsType'

import instagram from '../../../../public/images/instagram.svg'
import vk from '../../../../public/images/vk.svg'
import youtube from '../../../../public/images/youtube.svg'
import telegram from '../../../../public/images/telegram.svg'

export const SocialLinks = ({height, siteSettings}: {height: number; siteSettings: ISiteSettings}) => {
    const renderSocialLink = useMemo(() => {
        const imagesArr = [instagram, vk, youtube, telegram]
        return siteSettings.social_network.map(({id, name, url}, i) => {
            const image = imagesArr[i]
            return url ? (
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    key={id}
                    href={url}
                >
                    <Image
                        src={image}
                        alt={name}
                        height={height}
                        width={height}
                        style={{'width': `${height}`, 'height': `${height}`}}
                    />
                </a>
            ) : null
        })
    }, [siteSettings])

    return (
        <>
            {renderSocialLink}
        </>
    )
}