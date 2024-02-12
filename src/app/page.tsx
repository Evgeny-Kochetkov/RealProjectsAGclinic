import type { Metadata } from 'next'

import MainSlider  from '@/components/common/mainSlider'
import UniqueServices from '@/components/common/uniqueServices'
import WhyChooseUs from '@/components/common/whyChooseUs'
import Specialists from '@/components/common/specialists'
import Problems from '@/components/common/problems'
import New from '@/components/common/new'
import Contacts from '@/components/common/contacts'

export async function generateMetadata(): Promise<Metadata> {
	const resSeo = await fetch(`${process.env.API_URL}/api/seo/info/index?city_id=${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})
	return {
		title: resSeo.data.seo.name,
		description: resSeo.data.seo.description,
		alternates: {
			canonical: `${process.env.URL}`,
		}
	}
}

async function getData() {

	const resBanners = await fetch(`${process.env.API_URL}/api/banners/city/${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

	const resServicesСategory = await fetch(`${process.env.API_URL}/api/services_category/city/${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

	const resSpecialists = await fetch(`${process.env.API_URL}/api/specialist/city/${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

	const resProblems = await fetch(`${process.env.API_URL}/api/troubles/city/${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

	const resNews = await fetch(`${process.env.API_URL}/api/publication?type=0`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})

	const resSiteSettings = await fetch(`${process.env.API_URL}/api/site_settings/${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})
	
	return {
		specialist: resSpecialists.data.specialist.slice(0, 8),
		banner: resBanners.data.banner,
		servicesСategory: resServicesСategory.data.category,
		problems: resProblems.data.troubles,
		news: resNews.data.publication.reverse().slice(0, 8),
		siteSettings: resSiteSettings.data.settings
	}
}

export default async function Home() {

	const {  banner, specialist, servicesСategory, problems, news, siteSettings } = await getData()
	
	return (
		<>
			<MainSlider banners={banner} apiUrl={process.env.API_URL ? process.env.API_URL : ''}/>
			<UniqueServices servicesСategory={servicesСategory} apiUrl={process.env.API_URL ? process.env.API_URL : ''}/>
			<WhyChooseUs/>
			<Specialists specialist={specialist} apiUrl={process.env.API_URL ? process.env.API_URL : ''}/>
			<Problems problems={problems} apiUrl={process.env.API_URL ? process.env.API_URL : ''}/>
			{news && news.length ? <New news={news} apiUrl={process.env.API_URL ? process.env.API_URL : ''}/> : null}
			<Contacts siteSettings={siteSettings} mainPage={true}/>
		</>
	)
}
