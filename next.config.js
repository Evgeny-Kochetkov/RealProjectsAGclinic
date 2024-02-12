/** @type {import('next').NextConfig} */
const nextConfig = {

	reactStrictMode: true,
	compiler: {
		styledComponents: true
	},

	webpack: (config) => {
			config.module.rules.push({
				test: /\.(mov|mp4)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							publicPath: '/_next',
							name: 'static/videos/[name].[hash].[ext]',
						},
					},
				],
			});

			config.module.rules.push({
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: {
						loader: 'file-loader',
						options: {
								publicPath: '/_next/static/fonts',
								outputPath: 'static/fonts',
								name: '[name].[ext]',
						},
				},
		});

			return config;
	},

	images: {
			remotePatterns: [
				{
					protocol: 'https',
					hostname: 'agclinic.backend.demowts.ru',
					port: '',
					pathname: '/public/uploads/images/**'
				},
				{
					protocol: 'https',
					hostname: 'api.agclinic.ru',
					port: '',
					pathname: '/public/uploads/images/**'
				}
			],
	},

	async redirects() {
		return [
			{
				source: '/price',
				destination: '/price/epilyaciya',
				permanent: false,
			},
		];
	},
}

module.exports = nextConfig
