import { buildLegacyTheme } from 'sanity';

//  primary: '#DFD8BE',
//         secondary: '#5F2533',
//         secondaryHover: '#982F2F',
//         accent: '#5F2533',
//         accent2: '#D5845C',
//         myGrey: '#3B5771',
//         myBlue: '#577FA9',

const props = {
	'--my-white': '#DFD8BE',
	'--my-black': '#1f1f1f',
	'--my-blue': '#577FA9',
	'--my-brand': '#5F2533',
	'--my-red': '#D5845C',
	'--my-green': '#818E7B',
	'--my-yellow': '#E4CA60',
	'--my-grey': '#3B5771',
};

export const myTheme = buildLegacyTheme({
	'--gray-base': '#DFD8BE',

	'--component-bg': props['--my-black'],
	'--component-text-color': props['--my-white'],

	/* BRAND COLORS */
	'--brand-primary': props['--my-brand'],

	/* DEFAULT BUTTON */
	'--default-button-color': '#666',
	'--default-button-primary-color': props['--my-white'],
	'--default-button-success-color': props['--my-green'],
	'--default-button-danger-color': props['--my-red'],
	'--default-button-warning-color': props['--my-yellow'],

	/* STATE */

	'--state-success-color': props['--my-green'],
	'--state-danger-color': props['--my-red'],
	'--state-warning-color': props['--my-yellow'],
	'--state-info-color': props['--my-brand'],

	/* NAVBAR */
	'--main-navigation-color': props['--my-black'],
	'--main-navigation-color--inverted': props['--my-white'],

	'--focus-color': props['--my-red'],
});
