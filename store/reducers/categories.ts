const categoriesById: Categories = {
	'1': 'Groceries',
	'2': 'School',
	'3': 'Entertainment',
	'4': 'Utensils',
	'5': 'Kids',
	'6': 'Travel',
	'7': 'Commute',
	'8': 'Insurance',
	'9': 'Clothing',
	'10': 'Car',
	'11': 'Taxes',
	'12': 'Health',
	'13': 'Home',
	'14': 'Beauty',
	'15': 'Income',
	'16': 'Misc',
	'17': 'Gifting',
};
export const DEFAULT_CATEGORY_ID: string = '16';

export const inflowCategories: string[] = ['15'];

export const categoriesReducer = (state = categoriesById) => state;
