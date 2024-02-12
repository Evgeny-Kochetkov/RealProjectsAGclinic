import type { Metadata } from 'next'

import { DocumentContent } from '@/components/common/documentContent'

export async function generateMetadata(): Promise<Metadata> {
	const resSeo = await fetch(`${process.env.API_URL}/api/seo/info/document?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})
	return {
		title: resSeo.data.seo.name,
		description: resSeo.data.seo.description,
        alternates: {
			canonical: `${process.env.URL}/document`,
		}
	}
}

async function getData() {
	const resDocuments = await fetch(`${process.env.API_URL}/api/documents`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

    return {
        documents: resDocuments.data.document
    }
}

export default async function DocumentPage() {

    const { documents } = await getData()

    return (
        <DocumentContent documents={documents} apiUrl={process.env.API_URL ? process.env.API_URL : ''}/>
    )
}