import { ISiteSettings } from '@/types/siteSettingsType'

export const MapComponent = ({ siteSettings }: { siteSettings: ISiteSettings}) => {
    return (
        <iframe
            src={`https://yandex.ru/map-widget/v1/-/${siteSettings.x}`}
            width="100%"
            height="100%"
            style={{"position": "relative", 'border': 'none', 'borderRadius': '20px'}}
        />
    )
}