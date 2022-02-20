import { normalizeExpense } from 'store/reducers/expnses';
import * as actionTypes from '../actionTypes';

// expenses
export const addExpense = (expense: Expense) => ({
	type: actionTypes.expenses.ADD,
	payload: expense,
});

export const removeExpense = (id: string) => ({
	type: actionTypes.expenses.REMOVE,
	payload: id,
});

export const editExpense = (id: string, updates: Partial<Expense>) => ({
	type: actionTypes.expenses.UPDATE,
	payload: { id, updates },
});

export const actions = {
	addExpense:
		(expense: UnindexedExpense) => (dispatch: Function, getState: Function) =>
			dispatch({
				type: actionTypes.expenses.ADD,
				transaction: normalizeExpense(getState().expenses, expense),
			}),

	updateExpense: (expense: Expense) => (dispatch: Function) =>
		dispatch({
			type: actionTypes.expenses.UPDATE,
			expense,
		}),

	removeExpense: (id: Expense['id']) => ({
		type: actionTypes.expenses.REMOVE,
		id,
	}),
};
