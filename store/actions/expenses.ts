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
	type: actionTypes.expenses.EDIT,
	payload: { id, updates },
});

export const setExpenses = (expenses: Expense[]) => ({
	type: actionTypes.expenses.SET,
	payload: expenses,
});
