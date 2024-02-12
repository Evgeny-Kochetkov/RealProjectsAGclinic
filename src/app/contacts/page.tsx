import type { Metadata } from 'next'

import Contacts from '@/components/common/contacts'

export async function generateMetadata(): Promise<Metadata> {
	const resSeo = await fetch(`${process.env.API_URL}/api/seo/info/contacts?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})
	return {
		title: resSeo.data.seo.name,
		description: resSeo.data.seo.description,
        alternates: {
			canonical: `${process.env.URL}/contacts`,
		}
	}
}

async function getData() {
	const resSiteSettings = await fetch(`${process.env.API_URL}/api/site_settings/${process.env.TOWN}`, {
        next: { revalidate: 60 }
    }).then(response => {return response.json()})

    return {
        siteSettings: resSiteSettings.data.settings
    }
}

export default async function ContactsPage() {

    const { siteSettings } = await getData()

    return (
        <Contacts siteSettings={siteSettings} mainPage={false}/>
    )
}