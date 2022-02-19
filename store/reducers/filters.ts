import { filters } from 'store/actionTypes';
import moment from 'moment';

const filtersInitState = {
	text: '',
	sortBy: 'date',
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month'),
};

export const filtersReducer = (state = filtersInitState, action: any) => {
	if (action.type === filters.SET_TEXT_FILTER)
		return { ...state, text: action.text };

	if (action.type === filters.SET_START_DATE)
		return { ...state, startDate: action.startDate };

	if (action.type === filters.SET_END_DATE)
		return { ...state, endDate: action.endDate };

	if (action.type === filters.SORT_BY_AMOUNT)
		return { ...state, sortBy: 'amount' };

	if (action.type === filters.SORT_BY_DATE) return { ...state, sortBy: 'date' };

	return state;
};
