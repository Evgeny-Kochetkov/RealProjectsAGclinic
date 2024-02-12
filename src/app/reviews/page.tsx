import type { Metadata } from 'next'

import { ReviewsContent } from '@/components/common/reviewsContent'

export async function generateMetadata(): Promise<Metadata> {
	const resSeo = await fetch(`${process.env.API_URL}/api/seo/info/reviews?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})
	return {
		title: resSeo.data.seo.name,
		description: resSeo.data.seo.description,
        alternates: {
			canonical: `${process.env.URL}/reviews`,
		}
	}
}

async function getData() {
	const resReviews = await fetch(`${process.env.API_URL}/api/reviews/city/${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    return {
        reviews: resReviews.data.reviews
    }
}

export default async function ReviewsPage() {

    const { reviews } = await getData()
    
    return (
        <ReviewsContent reviews={reviews} cityId={process.env.TOWN ? +process.env.TOWN : 1} apiUrl={process.env.API_URL ? process.env.API_URL : ''}/>
    )
}