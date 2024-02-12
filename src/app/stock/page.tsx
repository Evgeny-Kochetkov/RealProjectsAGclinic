import type { Metadata } from 'next'

import { Stocks } from '@/components/common/stocks/index'

export async function generateMetadata(): Promise<Metadata> {
	const resSeo = await fetch(`${process.env.API_URL}/api/seo/info/stock/index?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})
	return {
		title: resSeo.data.seo.name,
		description: resSeo.data.seo.description,
        alternates: {
			canonical: `${process.env.URL}/stock`,
		}
	}
}

async function getData() {
	const resStocks = await fetch(`${process.env.API_URL}/api/publication/city/${process.env.TOWN}?type=1`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    return {
        stocks: resStocks.data.publication.reverse()
    }
}

export default async function StocksPage()  {

    const { stocks } = await getData()

    return (
        <Stocks stocks={stocks} apiUrl={process.env.API_URL ? process.env.API_URL : ''}/>
    )
}