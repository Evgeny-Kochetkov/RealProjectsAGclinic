import type { Metadata } from 'next'

import { PrivacyPolicy } from '@/components/common/privacyPolicy'

export async function generateMetadata(): Promise<Metadata> {
	const resSeo = await fetch(`${process.env.API_URL}/api/seo/info/privacy_policy?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})
	return {
		title: resSeo.data.seo.name,
		description: resSeo.data.seo.description,
        alternates: {
			canonical: `${process.env.URL}/privacy_policy`,
		}
	}
}

export default async function PrivacyPolicyPage() {
    return (
        <PrivacyPolicy/>
    )
}