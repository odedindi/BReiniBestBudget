import { expenses } from 'store/actionTypes';

const expensesInitState: Expense[] = [];

export const expensesReducer = (state = expensesInitState, action: any) => {
	switch (action.type) {
		case expenses.ADD:
			return [...state, action.expense];
		case expenses.EDIT:
			return state.map((expense) => {
				expense.id === action.id
					? {
							...expense,
							...action.payload.updates,
					  }
					: expense;
			});
		case expenses.REMOVE:
			return state.filter(({ id }) => id !== action.payload);
		case expenses.SET:
			return action.expenses;
		default:
			return state;
	}
};
