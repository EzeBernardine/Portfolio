import {
	SET_ACCESS_TOKEN,
	SET_IS_ADMIN,
	SET_IS_AUTHENTICATED,
	SET_LOADING,
	SET_REFRESH_TOKEN,
	SET_USER,
} from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
	case SET_ACCESS_TOKEN:
		return {
			...state,
			accessToken: action.payload,
		};
	case SET_IS_AUTHENTICATED:
		return {
			...state,
			isAuthenticated: action.payload,
		};
	case SET_LOADING:
		return {
			...state,
			loading: action.payload,
		};
	case SET_USER:
		return {
			...state, user: action.payload,
		};
	case SET_REFRESH_TOKEN:
		return {
			...state, refreshToken: action.payload,
		};
	case SET_IS_ADMIN:
		return {
			...state, isAdmin: action.payload,
		};
 

	default:
		return state;
	}
};
