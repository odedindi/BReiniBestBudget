import * as actionTypes from '../actionTypes';

export const setTextFilter = (text = '') => ({
	type: actionTypes.filters.SET_TEXT_FILTER,
	payload: text,
});

export const sortByDate = () => ({
	type: actionTypes.filters.SORT_BY_DATE,
});

export const sortByAmount = () => ({
	type: actionTypes.filters.SORT_BY_AMOUNT,
});

export const setStartDate = (startDate: number) => ({
	type: actionTypes.filters.SET_START_DATE,
	payload: startDate,
});

export const setEndDate = (endDate: number) => ({
	type: actionTypes.filters.SET_END_DATE,
	payload: endDate,
});
