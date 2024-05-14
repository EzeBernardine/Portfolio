
import { handleAPICall, useGetDataWithSWR } from "../utils/axiosHandler";
import { errorHandler, messageHandler} from "../utils/errorHandler";
import { useCallback } from "react";
import  {  useSWRConfig } from "swr";
import { UseContext } from "../state/provider";
import Notify from "../application/notification";
import { objIsEmpty } from "../utils";
import { useLogOut } from "./handlers/useLogout";

export const useAxiosHandler = () => {
	const { state: { accessToken: Token } } = UseContext();
	const {handleLogOut} = useLogOut()

	// Axios get  cached calls
	const getAxiosHandler =  useCallback(async ({url, token = Token, notify = true,   DATA, extra, queryParam, errorMessage , successMessage }) => {
		const { data, error } = await handleAPICall({url, token, method: "get", notify, DATA, extra, queryParam});

		notify  && data && successMessage && Notify().success( successMessage  );
		notify  && error &&  Notify().error( errorMessage ||  error  );
				
		error === "invalid_token" && handleLogOut()
		return { data, error };
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [  Token ]);

	// Axios post calls
	const postAxiosHandler =   useCallback( async ({url, token = Token, notify = true, DATA, successMessage, errorMessage, extraHeaders }) => {
		const { data, status, error, success , message } = await handleAPICall({ url, token, method: "post", DATA, extraHeaders });
		error === "invalid_token" && handleLogOut()
		notify  && data && Notify().success(   successMessage || messageHandler(message) );
		notify  && error && Notify().error( errorMessage ||  error );
		return { data, status, error, success , message };
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [Token]);

	// Axios put calls
	const putAxiosHandler =  async ({url, token = Token, notify = true, DATA, successMessage, errorMessage }) => {
		const { data, status, error, success , message} = await handleAPICall({ url, token, method: "put", DATA });
		error === "invalid_token" && handleLogOut()
		notify  && !objIsEmpty(data) && Notify().success( successMessage || messageHandler(message));
		notify  && error && Notify().error( errorMessage || error );
		return { data, status, error, success , message };
	};

	// Axios put calls
	const deleteAxiosHandler =  async ({url, token = Token, notify = true, DATA, successMessage }) => {
		const { data, status, error, success , message } = await handleAPICall({ url, token, method: "delete", DATA });
		error === "invalid_token" && handleLogOut()
		notify  && !objIsEmpty(data) && Notify().success( successMessage || messageHandler(message));
		notify  && error && Notify().error(error);
		return { data, status, error, success , message };
	};

	return { 
		getAxiosHandler, 
		putAxiosHandler, 
		postAxiosHandler,
		deleteAxiosHandler
	};
};

export const useGetCachedAxiosHandler = ( {url, notify = true, requiredVariable  = true, options = {}, noToken= false} ) => {
	const { state: { accessToken: Token } } = UseContext();
	const { handleLogOut } = useLogOut()

	
	const { data, error, isValidating, mutate, isLoading } = useGetDataWithSWR({
		url, 
		token: noToken ? "" : Token, 
		requiredVariable: noToken ? requiredVariable : Token  && requiredVariable, 
		method: "get", 
		options: { refreshInterval:  0, revalidateIfStale: false, shouldRetryOnError: false, revalidateOnFocus: false, ...options}, 
	});
	error && notify && Notify().error( errorHandler(error) || "Somethng went wrong" );
	error?.response?.data?.error === "invalid_token" && handleLogOut()

	return {
		data:   data?.data,
		responseCode:  error?.response?.data?.responseCode,
		errorCode:  error?.response?.data?.status,
		loading: requiredVariable  ? isLoading : false,
		error: error && errorHandler(error),
		mutate,
		isValidating
	};
};

export const useMutate = () => {
	const { mutate } = useSWRConfig();
	return { mutate };
};