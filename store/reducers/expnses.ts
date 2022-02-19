import { inflowCategories } from './categories';
import { expenses } from 'store/actionTypes';
import * as actionTypes from '../actionTypes';

// helpers
export const getNextExpenseId = (state: Expense[]): number =>
	state.reduce((maxId, expense) => Math.max(expense.id, maxId), -1) + 1;

export const normalizeExpense = (
	state: Expense[],
	{ categoryId, description, value: v }: UnindexedExpense,
) => {
	const value = inflowCategories.includes(categoryId)
		? Math.abs(v)
		: Math.abs(v) * -1;

	return {
		categoryId,
		description,
		id: getNextExpenseId(state),
		value,
	};
};
// helpers

// actions

type Action = {
	type: 'ADD_EXPENSE' | 'UPDATE_EXPENSE' | 'REMOVE_EXPENSE';
	payload: { expense: Expense; id?: number };
};

const addExpense =
	(expense: UnindexedExpense) => (dispatch: Function, getState: Function) =>
		dispatch({
			type: actionTypes.expenses.ADD,
			payload: { expense: normalizeExpense(getState().expenses, expense) },
		});

const removeExpense = (id: Expense['id']) => ({
	type: actionTypes.expenses.REMOVE,
	payload: { id },
});

const updateExpense = (expense: Expense) => (dispatch: Function) =>
	dispatch({
		type: actionTypes.expenses.UPDATE,
		payload: { expense },
	});

// actions

// reducer
const expensesInitState: Expense[] = [];
export const expensesReducer = (
	state = expensesInitState,
	{ payload, type }: Action,
) => {
	if (type === expenses.ADD) return [...state, payload.expense];
	if (type === expenses.REMOVE)
		return [...state].filter(({ id }) => id !== payload.id);
	if (type === expenses.UPDATE)
		return state.map((expense) => {
			expense.id === payload.expense.id ? payload.expense : expense;
		});
	return state;
};
