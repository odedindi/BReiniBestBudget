type Expense = {
	amount: number;
	categoryId: string;
	createdAt: number;
	description: string;
	id: number;
};

type UnindexedExpense = {
	categoryId: string;
	description: string;
	value: number;
};

type ExpenseSummary = {
	categoryId: string;
	amount: number;
	category?: string;
};

type Categories = { [key: string]: string };

type Filters = {
	text: string;
	sortBy: string;
	startDate: Moment;
	endDate: Moment;
};

type RootState = {
	auth: any;
	categories: Categories;
	expenses: Expense[];
	filters: Filters;
};
