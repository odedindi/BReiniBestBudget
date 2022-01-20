import * as actionTypes from '../actionTypes';

export const login = (id: string) => ({
	type: actionTypes.auth.LOGIN,
	payload: id,
});
export const logout = () => ({
	type: actionTypes.auth.LOGOUT,
});
