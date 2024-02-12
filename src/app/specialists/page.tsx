import type { Metadata } from 'next'

import { SpecialistsContent } from '@/components/common/specialistsContent'

export async function generateMetadata(): Promise<Metadata> {
	const resSeo = await fetch(`${process.env.API_URL}/api/seo/info/specialists/index?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})
	return {
		title: resSeo.data.seo.name,
		description: resSeo.data.seo.description,
        alternates: {
			canonical: `${process.env.URL}/specialists`,
		}
	}
}

async function getData() {
	const resSpecialists = await fetch(`${process.env.API_URL}/api/specialist/city/${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    return {
        specialist: resSpecialists.data.specialist
    }
}

export default async function SpecialistsPage () {

    const { specialist } = await getData()

    return (
        <SpecialistsContent specialist={specialist} apiUrl={process.env.API_URL ? process.env.API_URL : ''}/>
    )
}