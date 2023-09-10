/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
	...nextConfig,
	images: {
		domains: [
			'cdn.midjourney.com',
			'cdn.sanity.io',
			'churchos-uploads.s3.amazonaws.com',
		],
	},
};
