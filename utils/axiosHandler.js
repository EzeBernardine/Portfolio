import Axios from "axios";
import useSWR  from "swr";
import { errorHandler } from "./errorHandler";
import fetcher  from "./fetcher";

 

export const axiosHandler = ({
	method = "",
	url = "",
	token = "",
	data = {},
	extra = null,
	queryParam = {},
	extraHeaders
}) => {
	const methodType = method.toUpperCase();
	if (["GET", "POST", "PATCH", "PUT", "DELETE"].includes(methodType)) {
		const axiosProps = { method: methodType, url, data };

		if (token !== "") {
			axiosProps.headers = { Authorization: `Bearer ${token}` };
		}
		if (queryParam) {
			axiosProps.params = { ...queryParam };
		}
		if (extra) {
			axiosProps.headers = { ...axiosProps.headers, ...extra };
		}
		axiosProps.headers = {
			...axiosProps.headers,
			Accept: "application/json",
			"Content-Type": "application/json",
			...extraHeaders
		};

		return Axios(axiosProps);
	} else {
		alert(`method ${methodType} is not accepted or data is not an object`);
	}
};




export const handleAPICall = async ({url, token, method, DATA, extra = null, queryParam = {},  extraHeaders }  ) => {
	try {
		const { data } = await  axiosHandler({
			method,
			url,
			token,
			...(extra && {extra}),
			...(queryParam && {queryParam}),
			...(  DATA && {data: DATA}),
			...(  extraHeaders && {extraHeaders})
		});
		return { 
			data, 
			status: data?.status, 
			success: data?.responseCode === "00",
			message: data?.message,
		};
	} catch( error  ){
		return {
			error: errorHandler(error ) || "Something went wrong", 
		};
	}
};




export const useGetDataWithSWR = ({url, token, requiredVariable, method, options}) => {
	const { data, error, mutate , isValidating, isLoading } = useSWR(
		() => requiredVariable ? `${url}` : null,
		() => requiredVariable ? fetcher(url, method, token) : [],
		{ ...options }
	);
	return { data, error, mutate , isValidating, isLoading};
};

 