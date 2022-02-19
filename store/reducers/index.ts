import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { categoriesReducer } from './categories';
import { expensesReducer } from './expnses';
import { filtersReducer } from './filters';

export { authReducer, categoriesReducer, expensesReducer, filtersReducer };

const rootReducer = combineReducers({
	auth: authReducer,
	categories: categoriesReducer,
	expenses: expensesReducer,
	filters: filtersReducer,
});
export default rootReducer;
