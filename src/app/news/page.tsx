import type { Metadata } from 'next'

import { News } from '@/components/common/news'

export async function generateMetadata(): Promise<Metadata> {
	const resSeo = await fetch(`${process.env.API_URL}/api/seo/info/news/index?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})
	return {
		title: resSeo.data.seo.name,
		description: resSeo.data.seo.description,
        alternates: {
			canonical: `${process.env.URL}/news`,
		}
	}
}

async function getData() {
	const resNews = await fetch(`${process.env.API_URL}/api/publication?type=0`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    return {
        news: resNews.data.publication.reverse()
    }
}

export default async function NewsPage () {

    const { news } = await getData()

    return (
        <News news={news} apiUrl={process.env.API_URL ? process.env.API_URL : ''}/>
    )
}