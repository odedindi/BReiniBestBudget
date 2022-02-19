export type FormattedAmount = {
	text: string;
	isNegative: boolean;
};

type Format = {
	[key: string]: {
		locale: string;
		currency: string;
	};
};
const format: Format = {
	swissGerman: {
		locale: 'de-CH',
		currency: 'CHF',
	},
	usa: {
		locale: 'en-us',
		currency: 'USD',
	},
};

type FormatAmount = (amount: number, showSign?: boolean) => FormattedAmount;

export const formatAmount: FormatAmount = (amount, showSign = true) => {
	const isNegative = amount < 0;
	const formatValue = Math.abs(amount).toLocaleString(
		format.swissGerman.locale,
		{ style: 'currency', currency: format.swissGerman.currency },
	);

	return {
		text: `${isNegative && showSign ? '-' : ''}${formatValue}`,
		isNegative,
	};
};

export default formatAmount;
