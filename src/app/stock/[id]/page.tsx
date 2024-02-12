import type { Metadata } from 'next'

import { notFound } from 'next/navigation'

import { StockPage } from '@/components/common/stockPage'

export async function generateMetadata({
    params: { id },
}: {
    params: { id: string }
}): Promise<Metadata> {
	const resStockItem = await fetch(`${process.env.API_URL}/api/publication/path/${id}?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    if(resStockItem.status === 'error') {
        notFound()
    }

	return {
		title: resStockItem.data.publication.seo.name,
		description: resStockItem.data.publication.seo.description,
        alternates: {
			canonical: `${process.env.URL}/stock/${id}`,
		}
	}
}

async function getData(id: string) {
	const resStockItem = await fetch(`${process.env.API_URL}/api/publication/path/${id}?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    if(resStockItem.status === 'error') {
        notFound()
    }

    return {
        stockItem: resStockItem.data.publication
    }
}

export default async function Stocks_Page ({
    params: { id },
}: {
    params: { id: string }
}) {

    const { stockItem } = await getData(id)

    return (
        <StockPage stockItem={stockItem} cityId={process.env.TOWN ? +process.env.TOWN : 1}/>
    )
}