/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

module.exports = withPWA({
	pwa: {
		disable: process.env.NODE_ENV === 'development',
		dest: 'public',
	},
	reactStrictMode: true,

	images: {
		domains: ['images.unsplash.com', 'https://icons8.com/', 'https://maxcdn.icons8.com']
	}
});
