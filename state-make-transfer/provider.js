import React, { createContext, useReducer } from "react";
import { 
	SET_TRANSFER_DATA,
} from "./actions";
import { reducer } from "./reducer";

export const Context = createContext({});

const initialState = {
	transferData: {
		beneficiary: {
			email: "",
			fullName: "",
			accountNumber: "",
			accountName: "",
			bankName: "",
			bankCode: "",
		},
		paymentChannel: "",
		paymentChannels: [{
			name: ""
		}],
		transferAmount: "",
		sourceCountry: {
			id: "",
			countryFlagImageUrl: "",
		},
		destinationCountry: {
			id: "",
			countryFlagImageUrl: "",
		},
		totalPayable: "",
		exchange: "",
		fee: "",
		reInitiateTransfer: false,
		recipientAmount: "",
		unformattedTotalPayable: "",
	},
};

export function ProviderTransferContext({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const setTransferData = (payload) => 	dispatch({ type: SET_TRANSFER_DATA, payload });

	return (
		<Context.Provider
			value={{
				state,
				setTransferData
			}}
		>
			{children}
		</Context.Provider>
	);
}

export const UseTransferContext = () => React.useContext(Context);
