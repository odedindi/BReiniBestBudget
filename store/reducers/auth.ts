import { auth } from 'store/actionTypes';

const authInitState: any = {};

export const authReducer = (state = authInitState, action: any) => {
	switch (action.type) {
		case auth.LOGIN:
			return {
				id: action.payload,
			};
		case auth.LOGOUT:
			return {};
		default:
			return state;
	}
};
