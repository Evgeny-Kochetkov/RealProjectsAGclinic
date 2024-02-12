import type { Metadata } from 'next'

import { UniqueServicesContent } from '@/components/common/uniqueServicesContent'

export async function generateMetadata(): Promise<Metadata> {
	const resSeo = await fetch(`${process.env.API_URL}/api/seo/info/unique_category?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})
	return {
		title: resSeo.data.seo.name,
		description: resSeo.data.seo.description,
        alternates: {
			canonical: `${process.env.URL}/unique_services`,
		}
	}
}

async function getData() {
	const resServicesСategory = await fetch(`${process.env.API_URL}/api/services_category/city/${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    return {
        category: resServicesСategory.data.category
    }
}

export default async function UniqueServicesPage () {

    const { category } = await getData()

    return (
        <UniqueServicesContent servicesСategory={category} apiUrl={process.env.API_URL ? process.env.API_URL : ''}/>
    )
}