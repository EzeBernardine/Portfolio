import {
 
	SET_TRANSFER_DATA,
} from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
	case SET_TRANSFER_DATA:
		return {
			...state,
			transferData: action.payload,
		};
 

	default:
		return state;
	}
};
