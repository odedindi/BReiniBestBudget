import { BasicTheme, DarkTheme, LightTheme } from './styled';

export const light: LightTheme = {
	body: '#fff',
	text: '#2d3035',
	primary: '#6749cd',
};

export const dark: DarkTheme = {
	body: '#141420',
	text: '#fff',
	primary: '#6749cd',
};

const basicTheme: BasicTheme = {
	fontSizes: {
		small: '0.8rem',
		p: '1rem',
		h6: '1.25rem',
		h5: '1.5rem',
		h4: '1.75rem',
		h3: '2rem',
		h2: '2.2rem',
		h1: '2.5rem',
	},
	fontWeights: {
		body: 400,
		subheading: 500,
		link: 600,
		bold: 700,
		heading: 800,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.75,
		code: 1.6,
		logo: '2.125rem',
	},
	// ...
};

export const lightTheme = { ...basicTheme, colors: { ...light } };
export const darkTheme = { ...basicTheme, colors: { ...dark } };
