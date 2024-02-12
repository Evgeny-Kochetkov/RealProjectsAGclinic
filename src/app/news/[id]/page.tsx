import type { Metadata } from 'next'

import { notFound } from 'next/navigation'

import { NewsPage } from '@/components/common/newsPage/index'

export async function generateMetadata({
    params: { id },
}: {
    params: { id: string }
}): Promise<Metadata> {
	const resNewsItem = await fetch(`${process.env.API_URL}/api/publication/path/${id}?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    if(resNewsItem.status === 'error') {
        notFound()
    }

	return {
		title: resNewsItem.data.publication.seo.name,
		description: resNewsItem.data.publication.seo.description,
        alternates: {
			canonical: `${process.env.URL}/news/${id}`,
		}
	}
}

async function getData(id: string) {
	const resNewsItem = await fetch(`${process.env.API_URL}/api/publication/path/${id}?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    if(resNewsItem.status === 'error') {
        notFound()
    }

    return {
        newsItem: resNewsItem.data.publication
    }
}

export default async function CurrentNews({
    params: { id },
}: {
    params: { id: string }
}) {

    const { newsItem } = await getData(id)

    return (
        <NewsPage newsItem={newsItem} cityId={process.env.TOWN ? +process.env.TOWN : 1}/>
    )
}