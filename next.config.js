/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"resources.mynewsdesk.com",
			"image.cnbcfm.com",
			"t2.tudocdn.net",
			"cdn4.iconfinder.com",
			"upload.wikimedia.org",
			"www.adobe.com",
			"res.cloudinary.com",
			"flagcdn.com",
			"miro.medium.com"
		],
	},
	env: {
		BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
		ANGULAR_BASE_URL: process.env.NEXT_PUBLIC_ANGULAR_BASE_URL,
		OATH_CLIENT_ID: process.env.NEXT_PUBLIC_OATH_CLIENT_ID,
		OATH_CLIENT_SECRET: process.env.NEXT_PUBLIC_OATH_CLIENT_SECRET,
		MIXPANEL_TOKEN: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
	},
};

module.exports = nextConfig;
