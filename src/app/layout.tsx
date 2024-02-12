import type { Metadata } from 'next'
import { Layout } from '@/components/layout'
import { GlobalStyle } from '@/globalStyle'
import StyledComponentsRegistry from './registry'
import { ReduxProvider } from '@/redux/provider'

import localFont from 'next/font/local'
const gilroy = localFont({
	src: [
		{
			path: '../../public/fonts/Gilroy-Regular.woff',
			weight: 'normal',
			style: 'normal'
		},
		{
			path: '../../public/fonts/Gilroy-Medium.woff',
			weight: '500',
			style: 'normal'
		},
		{
			path: '../../public/fonts/Gilroy-RegularItalic.woff',
			weight: 'normal',
			style: 'italic'
		},
		{
			path: '../../public/fonts/Gilroy-LightItalic.woff',
			weight: '300',
			style: 'italic'
		},
		{
			path: '../../public/fonts/Gilroy-Bold.woff',
			weight: 'bold',
			style: 'normal'
		},
	],
	variable: '--font-gilroy'
})

const montserratAlternates = localFont({
	src: [
		{
			path: '../../public/fonts/Montserrat-Alternates-Regular.woff',
			weight: 'normal',
			style: 'normal'
		},
		{
			path: '../../public/fonts/Montserrat-Alternates-SemiBold.woff',
			weight: '600',
			style: 'normal'
		},
	],
	variable: '--font-montserratAlternates'
})

const cambria = localFont({
	src: [
		{
			path: '../../public/fonts/Cambria.woff',
			weight: 'normal',
			style: 'normal'
		},
		{
			path: '../../public/fonts/Cambria-Bold.woff',
			weight: 'bold',
			style: 'normal'
		},
	],
	variable: '--font-cambria'
})

export const metadata: Metadata = {
	title: 'Заголовок по умолчанию',
	description: 'Описание по умолчанию'
}

async function getData() {
	return await fetch(`${process.env.API_URL}/api/site_settings/${process.env.TOWN}`, {
		next: { revalidate: 60 }
	}).then(response => {return response.json()})
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const data = await getData()

	const setCity = () => {
        switch(data.data.settings.city_id) {
            case 1: return 'Donetsk'
            case 2: return 'Makeevka'
            case 17: return 'Rostov-on-Don'
        }
    }

	return (
		<html lang='ru'>
			<head>
				<meta name='region' content='RU'/>
				<meta name='city' content={setCity()}/>
				<meta name='robots' content={process.env.MODE === '1' ? 'index,follow' : 'noindex,nofollow'}/>
				<meta name='yandex-verification' content='9ef2457b685ed30a'/>
				{process.env.MODE === '1' ? <script type='text/javascript' dangerouslySetInnerHTML={{ __html: `
					(function(){ var widget_id = 'QtobkUHuyH';var d=document;var w=window;function l(){
					var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
				` }}></script> : null}
				{process.env.MODE === '1' ? <script type='text/javascript' dangerouslySetInnerHTML={{ __html: `
				(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
				m[i].l=1*new Date();
				for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
				k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
				(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
				
				ym(95566637, "init", {
						clickmap:true,
						trackLinks:true,
						accurateTrackBounce:true
				});
				` }}></script> : null}
				<noscript><div><img src='https://mc.yandex.ru/watch/95566637' style={{'position': 'absolute', 'left': '-9999px'}} alt='' /></div></noscript>
			</head>
			<StyledComponentsRegistry>
				<GlobalStyle/>
				<body className={`${gilroy.variable} ${montserratAlternates.variable} ${cambria.variable}`}>
					<ReduxProvider>
						<Layout settings={data.data.settings}>
							{children}
						</Layout>
					</ReduxProvider>
				</body>
			</StyledComponentsRegistry>
		</html>
	)
}