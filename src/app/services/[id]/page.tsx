import type { Metadata } from 'next'

import { notFound } from 'next/navigation'

import { Service } from '@/components/common/servise'

export async function generateMetadata({
    params: { id },
}: {
    params: { id: string }
}): Promise<Metadata> {
	const resServise = await fetch(`${process.env.API_URL}/api/services/path/${id}?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    if(resServise.status === 'error') {
        notFound()
    }

	return {
		title: resServise.data.service.seo.name,
		description: resServise.data.service.seo.description,
        alternates: {
			canonical: `${process.env.URL}/services/${id}`,
		}
	}
}

async function getData(id: string) {
	const resServise = await fetch(`${process.env.API_URL}/api/services/path/${id}?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    if(resServise.status === 'error') {
        notFound()
    }

    return {
        service: resServise.data.service
    }
}

export default async function ServicesPage({
    params: { id },
}: {
    params: { id: string }
}) {

    const { service } = await getData(id)

    return (
        <Service service={service} apiUrl={process.env.API_URL ? process.env.API_URL : ''}/>
    )
}