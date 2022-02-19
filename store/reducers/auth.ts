import { auth } from 'store/actionTypes';

const authInitState: any = {};

export const authReducer = (state = authInitState, { payload, type }: any) => {
	if (type === auth.LOGIN) return { id: payload };
	if (type === auth.LOGOUT) return {};
	return state;
};
