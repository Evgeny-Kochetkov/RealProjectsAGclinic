import type { Metadata } from 'next'

import { notFound } from 'next/navigation'

import { Price } from '@/components/common/price'

export async function generateMetadata({
    params: { id },
}: {
    params: { id: string }
}): Promise<Metadata> {
	const resPricesSection = await fetch(`${process.env.API_URL}/api/price/section/path/${id}?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    if(resPricesSection.status === 'error') {
        notFound()
    }

	return {
		title: resPricesSection.data.section.seo.name,
		description: resPricesSection.data.section.seo.description,
        alternates: {
			canonical: `${process.env.URL}/price/${id}`,
		}
	}
}

async function getData(id: string) {
	const resPrices = await fetch(`${process.env.API_URL}/api/price/section/tree?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    if(resPrices.status === 'error') {
        notFound()
    }

    const resPricesSection = await fetch(`${process.env.API_URL}/api/price/section/path/${id}?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    if(resPricesSection.status === 'error') {
        notFound()
    }

    return {
        prices: resPrices.data.section,
        section: resPricesSection.data.section
    }
}

export default async function PricePage ({
    params: { id },
}: {
    params: { id: string }
}) {
    
    const { prices, section } = await getData(id)

    return (
        <Price prices={prices} section={section}/>
    )
}