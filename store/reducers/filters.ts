import { filters } from 'store/actionTypes';
import moment from 'moment';

const filtersInitState = {
	text: '',
	sortBy: 'date',
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month'),
};

export const filtersReducer = (state = filtersInitState, action: any) => {
	switch (action.type) {
		case filters.SET_TEXT_FILTER:
			return {
				...state,
				text: action.text,
			};
		case filters.SET_START_DATE:
			return {
				...state,
				startDate: action.startDate,
			};
		case filters.SET_END_DATE:
			return {
				...state,
				endDate: action.endDate,
			};
		case filters.SORT_BY_AMOUNT:
			return {
				...state,
				sortBy: 'amount',
			};
		case filters.SORT_BY_DATE:
			return {
				...state,
				sortBy: 'date',
			};
		default:
			return state;
	}
};
