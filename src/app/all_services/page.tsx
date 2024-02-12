import type { Metadata } from 'next'

import { Services } from '@/components/common/services'

export async function generateMetadata(): Promise<Metadata> {
	const resSeo = await fetch(`${process.env.API_URL}/api/seo/info/all_services?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})
	return {
		title: resSeo.data.seo.name,
		description: resSeo.data.seo.description,
        alternates: {
			canonical: `${process.env.URL}/all_services`,
		}
	}
}

async function getData() {
	const resAllServices = await fetch(`${process.env.API_URL}/api/services/city/${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    return {
        allServices: resAllServices.data.service
    }
}

export default async function AllServicesPage({
    searchParams: { searchData },
}: {
    searchParams: { searchData: string }
}) {

    const { allServices } = await getData()
    
    return (
        <Services allServices={allServices} searchData={searchData} apiUrl={process.env.API_URL ? process.env.API_URL : ''}/>
    )
}