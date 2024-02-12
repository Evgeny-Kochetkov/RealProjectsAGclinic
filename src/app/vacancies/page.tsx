import type { Metadata } from 'next'

import { Vacancies } from '@/components/common/vacancies'

export async function generateMetadata(): Promise<Metadata> {
	const resSeo = await fetch(`${process.env.API_URL}/api/seo/info/vacancies?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})
	return {
		title: resSeo.data.seo.name,
		description: resSeo.data.seo.description,
        alternates: {
			canonical: `${process.env.URL}/vacancies`,
		}
	}
}

async function getData() {
	const resVacancies = await fetch(`${process.env.API_URL}/api/vacancy/city/${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    return {
        vacancies: resVacancies.data.vacancy
    }
}

export default async function VacanciesPage() {

    const { vacancies } = await getData()
    
    return (
        <Vacancies vacancies={vacancies}/>
    )
}