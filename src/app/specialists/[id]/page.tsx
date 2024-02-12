import type { Metadata } from 'next'

import { notFound } from 'next/navigation'

import { Specialist } from '@/components/common/specialist'

export async function generateMetadata({
    params: { id },
}: {
    params: { id: string }
}): Promise<Metadata> {
	const resSpecialist = await fetch(`${process.env.API_URL}/api/specialist/path/${id}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    if(resSpecialist.status === 'error') {
        notFound()
    }

	return {
		title: resSpecialist.data.specialist.seo.name,
		description: resSpecialist.data.specialist.seo.description,
        alternates: {
			canonical: `${process.env.URL}/specialists/${id}`,
		}
	}
}

async function getData(id: string) {
	const resSpecialist = await fetch(`${process.env.API_URL}/api/specialist/path/${id}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    if(resSpecialist.status === 'error') {
        notFound()
    }

    return {
        specialist: resSpecialist.data.specialist
    }
}

export default async function SpecialistPage({
    params: { id },
}: {
    params: { id: string }
}) {

    const { specialist } = await getData(id)

    return (
        <Specialist specialist={specialist} cityId={process.env.TOWN ? +process.env.TOWN : 1} apiUrl={process.env.API_URL ? process.env.API_URL : ''}/>
    )
}