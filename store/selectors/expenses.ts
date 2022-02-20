import { expenses } from 'store/actionTypes';
import { createSelector } from 'reselect';
import formatAmount from 'utils/formatAmount';

import { getCategories } from './categories';

const totalExpenses = (expenses: Expense[]): number =>
	expenses.reduce<number>((total, { amount }) => total + amount, 0);

const summarizeExpenses = (expenses: Expense[]): ExpenseSummary[] =>
	expenses.reduce<ExpenseSummary[]>((summary, { categoryId, amount }) => {
		const sum =
			summary.find((expense) => expense.categoryId === categoryId) ||
			summary[summary.push({ categoryId, amount: 0 }) - 1];
		sum.amount += Math.abs(amount);
		return summary;
	}, []);

export const sortExpense = (expenses: Expense[]): Expense[] =>
	[...expenses].sort((a, b) => b.amount - a.amount);

const applyCategoryName = (expense: ExpenseSummary[], categories: Categories) =>
	expense.map((expense) => {
		expense.category = categories[expense.categoryId];
		return expense;
	});

export const getExpenses = (state: RootState): Expense[] =>
	state.expenses || [];

const getInflowExpenses = createSelector([getExpenses], (expenses) =>
	expenses.filter((item) => item.amount > 0),
);

const getOutflowExpenses = createSelector([getExpenses], (expenses) =>
	expenses.filter((item) => item.amount < 0),
);

const getBalance = createSelector([getExpenses], (expenses) =>
	totalExpenses(expenses),
);

export const getInflowBalance = createSelector(
	[getInflowExpenses],
	(expenses) => totalExpenses(expenses),
);

export const getOutflowBalance = createSelector(
	[getOutflowExpenses],
	(expenses) => totalExpenses(expenses),
);

export const getFormattedBalance = createSelector([getBalance], (amount) =>
	formatAmount(amount, false),
);

export const getFormattedInflowBalance = createSelector(
	[getInflowBalance],
	(amount) => formatAmount(amount, false),
);

export const getFormattedOutflowBalance = createSelector(
	[getOutflowBalance],
	(amount) => formatAmount(amount, false),
);

const getOutflowByCategory = createSelector([getOutflowExpenses], (expenses) =>
	summarizeExpenses(expenses),
);

const getInflowByCategory = createSelector([getInflowExpenses], (expenses) =>
	summarizeExpenses(expenses),
);

export const getOutflowByCategoryName = createSelector(
	getOutflowByCategory,
	getCategories,
	(trans, cat) => applyCategoryName(trans, cat),
);

export const getInflowByCategoryName = createSelector(
	getInflowByCategory,
	getCategories,
	(trans, cat) => applyCategoryName(trans, cat),
);
