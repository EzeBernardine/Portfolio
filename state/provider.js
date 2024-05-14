import React, { createContext,   useReducer } from "react";
import {
	SET_ACCESS_TOKEN,
	SET_IS_ADMIN,
	SET_IS_AUTHENTICATED,
	SET_LOADING,
	SET_REFRESH_TOKEN,
	SET_USER,
} from "./actions";
import { reducer } from "./reducer";

export const Context = createContext({});

const initialState = {
	accessToken: "",
	refreshToken: "",
	isAuthenticated: false,
	loading: true,
	user: {},
	isAdmin: undefined,
};

export function ProviderContext({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);


	const setAccessToken = (payload) => 	dispatch({ type: SET_ACCESS_TOKEN, payload });
	const setFreshToken = (payload) => 	dispatch({ type: SET_REFRESH_TOKEN, payload });
	const setIsAuthenticated = (payload) => 	dispatch({ type: SET_IS_AUTHENTICATED, payload });
	const setLoading = (payload) => dispatch({ type: SET_LOADING, payload });
	const setUser = (payload) => dispatch({ type: SET_USER, payload });
	const setIsAdmin = (payload) => dispatch({ type: SET_IS_ADMIN, payload });



		
 



	return (
		<Context.Provider
			value={{
				state,
				setAccessToken,
				setIsAuthenticated,
				setLoading,
				setUser,
				setFreshToken,
				setIsAdmin,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export const UseContext = () => React.useContext(Context);
