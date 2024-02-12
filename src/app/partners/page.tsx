import type { Metadata } from 'next'

import { Partners } from '@/components/common/partners'

export async function generateMetadata(): Promise<Metadata> {
	const resSeo = await fetch(`${process.env.API_URL}/api/seo/info/partners?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})
	return {
		title: resSeo.data.seo.name,
		description: resSeo.data.seo.description,
        alternates: {
			canonical: `${process.env.URL}/partners`,
		}
	}
}

async function getData() {
	const resPartners = await fetch(`${process.env.API_URL}/api/partners`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    return {
        partners: resPartners.data.partner
    }
}

export default async function PartnersPage() {

    const { partners } = await getData()

    return (
        <Partners partners={partners} apiUrl={process.env.API_URL ? process.env.API_URL : ''}/>
    )
}