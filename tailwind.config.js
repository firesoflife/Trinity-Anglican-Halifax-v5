/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./node_modules/flowbite-react/**/*.js',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#DFD8BE',
				secondary: '#5F2533',
				secondaryHover: '#8B3E56',
				accent: '#CA5A33',
				accent2: '#D5845C',
				myGrey: '#3B5771',
				myBlue: '#577FA9',
			},
			fontFamily: {
				heading: ['var(--font-header)', ...fontFamily.serif], // weight 400
				subheading: ['var(--font-header2)', ...fontFamily.serif], // weight 700
				mainContent: ['var(--font-main-content)', ...fontFamily.sans], // weight 400
				mainContent2: ['var(--font-main-content2)', ...fontFamily.sans], // weight 700
				subContent: ['var(--font-sub-content)', ...fontFamily.sans], // weight 400
				subContent2: ['var(--font-sub-content2)', ...fontFamily.sans], // weight 700
			},
		},
	},
	plugins: [
		require('daisyui'),
		require('flowbite/plugin'),
		require('@tailwindcss/line-clamp'),
	],
	daisyui: {
		themes: [
			'light',
			'dark',
			'corporate',
			'retro',
			'coffee',
			'black',
			'business',
		],
	},
};
