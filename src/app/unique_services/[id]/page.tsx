import type { Metadata } from 'next'

import { notFound } from 'next/navigation'

import { Services } from '@/components/common/services'

export async function generateMetadata({
    params: { id },
}: {
    params: { id: string }
}): Promise<Metadata> {
	const resCategory = await fetch(`${process.env.API_URL}/api/services_category/path/${id}?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    if(resCategory.status === 'error') {
        notFound()
    }

	return {
		title: resCategory.data.category.seo.name,
		description: resCategory.data.category.seo.description,
        alternates: {
			canonical: `${process.env.URL}/unique_services/${id}`,
		}
	}
}

async function getData(id: string) {
	const resCategory = await fetch(`${process.env.API_URL}/api/services_category/path/${id}?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    if(resCategory.status === 'error') {
        notFound()
    }

    return {
        category: resCategory.data.category
    }
}

export default async function ServicesPage({
    params: { id },
}: {
    params: { id: string }
}) {

    const { category } = await getData(id)

    return (
        <Services category={category} apiUrl={process.env.API_URL ? process.env.API_URL : ''}/>
    )
}