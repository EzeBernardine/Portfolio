
import { useState } from "react";
import { BASE_URL, TRANSFER_COUNTRY, TRANSFER_RATE,   } from "../constant/url";

import {
	useAxiosHandler, useGetCachedAxiosHandler, 
} from "./useAxiosHandler";
import { useEffect } from "react";
import { UseContext } from "../state/provider";
import { objIsEmpty } from "../utils";
import Notify from "../application/notification";








 

export const useGetTransferRate = (DATA, requiredVariable) => {
	const [rate, setRate] = useState()
	const [loading, setLoading] = useState(false);
	const { postAxiosHandler } = useAxiosHandler();

	
	useEffect(() => {
		const handleGetTransferRate = async () => {
			setLoading(true);
			const { data } = await postAxiosHandler({
				url: `${BASE_URL}/transfer-rate/get-recipient-value`,
				DATA ,
				notify: false
			});
	
			setLoading(false);
			if (data) {
				setRate(data?.data)
				return {data};
			}
		};

		requiredVariable && handleGetTransferRate()

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [JSON.stringify(DATA), postAxiosHandler])
	return {   loading, rate, requiredVariable };
};
 





export const useGetTransferCountries = () => {
	const { data , error, loading, mutate } =   useGetCachedAxiosHandler({
		url: `${TRANSFER_COUNTRY}/get-source-country-list`,
		notify: false,
		noToken: true
	});
 
	return {   loading, countries: data?.data, error, mutate  };
};


export const useGetTransferCountryList = () => {
	const { data , error, loading, mutate } =   useGetCachedAxiosHandler({
		url: `${TRANSFER_COUNTRY}/get-transfer-country-list`,
		notify: false,
		noToken: true
	});
 
	return {   loading, createdCountries: data?.data, error, mutate  };
};
export const useGetTransferRateManagerList = () => {
	const { data , error, loading, mutate } =   useGetCachedAxiosHandler({
		url: `${TRANSFER_RATE}/get-transfer-rate-manager-list`,
		notify: false,
	});
 
	return {   loading, transferRateList: data?.data?.content, error, mutate  };
};

 

export const useGetTransferCountryList2 = () => {
	const { data , error, loading, mutate } =   useGetCachedAxiosHandler({
		url: `${TRANSFER_COUNTRY}/get-transfer-country-list/v2`,
		notify: false,
	});
 
	return {   loading, transferCountryList: data?.data, error, mutate  };
};


export const useGetTransferCountriesById = () => {
	const { state: { user, accessToken}} = UseContext()
	const { data , error, loading } =   useGetCachedAxiosHandler({
		url: `${TRANSFER_COUNTRY}/get-destination-country-list-by-sourceCountryId/${user?.userCountry?.id}?access_token=${accessToken}`,
		notify: false,
		noToken: true,
		requiredVariable: accessToken?.length > 0 && !objIsEmpty(user?.userCountry)
	});
 
	return {   loading, countries: data?.data, error  };
};



export const useGetDestinationCountries = (sourceCountryId) => {
	const { data , error, loading } =   useGetCachedAxiosHandler({
		url: `${TRANSFER_COUNTRY}/get-destination-country-list-by-sourceCountryId/${sourceCountryId}`,
		notify: false,
		noToken: true,
		requiredVariable: typeof(sourceCountryId) === "number"
	});
 
	return {   loading, destinationCountries: data?.data, error  };
};





export const useTransferRate = () => {
	const [loading, setLoading] = useState(false);
	const { putAxiosHandler, postAxiosHandler, deleteAxiosHandler  } = useAxiosHandler();
	
	const handleUpdateTransferRate = async (DATA) => {
		setLoading(true);
		const { data , error} = await putAxiosHandler({
			url: `${TRANSFER_RATE}/update-transfer-rate-manager`,
			DATA,
			errorMessage: "Something went wrong",
			successMessage: "Transfer rate updated successfully",
		});
		setLoading(false);
		if (data) {
			return { data: data?.data };
		}
		if(error){
			Notify().error(  error );
		}
	};
	const handleCreateTransferRate = async (DATA) => {
		setLoading(true);
		const { data ,  } = await postAxiosHandler({
			url: `${TRANSFER_RATE}/create-transfer-rate-manager`,
			DATA,
			errorMessage: "Something went wrong",
			successMessage: "Transfer rate created successfully",
		});
		setLoading(false);
		if (data) {
			return { data: data?.data };
		} 
	};
	const handleDeleteTransferRate = async (transferRateManagerId) => {
		setLoading(true);
		const { data , } = await deleteAxiosHandler({
			url: `${TRANSFER_RATE}/remove-transfer-rate-manager-by-id/${transferRateManagerId}`,
			errorMessage: "Something went wrong",
			successMessage: "Transfer rate deleted successfully",
		});
		setLoading(false);
		if (data) {
			return { data: data?.data };
		} 
	};
	return { handleCreateTransferRate, handleUpdateTransferRate,handleDeleteTransferRate, loading };
};


export const useTransferCountry = () => {
	const [loading, setLoading] = useState(false);
	const { putAxiosHandler, postAxiosHandler,    } = useAxiosHandler();
	
	const handleUpdateTransferCountry = async (DATA) => {
		setLoading(true);
		const { data , error} = await putAxiosHandler({
			url: `${TRANSFER_COUNTRY}/update-transfer-country`,
			DATA,
			errorMessage: "Something went wrong",
			successMessage: "Transfer country updated successfully",
		});
		setLoading(false);
		if (data) {
			return { data: data?.data };
		}
		if(error){
			Notify().error(  error );
		}
	};
	const handleCreateTransferCountry = async (DATA) => {
		setLoading(true);
		const { data ,  } = await postAxiosHandler({
			url: `${TRANSFER_COUNTRY}/create-transfer-country`,
			DATA,
			errorMessage: "Something went wrong",
			successMessage: "Transfer country created successfully",
		});
		setLoading(false);
		if (data) {
			return { data: data?.data };
		} 
	};
 
	return { handleCreateTransferCountry, handleUpdateTransferCountry, loading };
};

