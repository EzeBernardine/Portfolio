

import {  BEEFICIARY_URL, } from "../constant/url";

import {
	useAxiosHandler,
	 useGetCachedAxiosHandler, 
} from "./useAxiosHandler";
import { UseContext } from "../state/provider";
import { objIsEmpty } from "../utils";
import { useCACHE } from "../hooks/handlers/useCache";
import { useEffect, useState } from "react";






 

export const useGetBeneficiary = (destinationCountryId) => {
	const { state: { user, accessToken}} = UseContext()
	const [pageInfo, setPageInfo] = useState({
		page: 0,
		limit: 10
	})

	const { data , error, loading , mutate, isValidating, errorCode} =   useGetCachedAxiosHandler({
		url: `${BEEFICIARY_URL}/get-beneficiaries?countryId=${destinationCountryId}&access_token=${accessToken}&pageNo=${pageInfo.page }&pageSize=${pageInfo.limit}`,
		notify: false,
		requiredVariable: typeof(destinationCountryId)  === "number" && accessToken?.length > 0 && !objIsEmpty(user?.userCountry)
	});
	const {CACHE} = useCACHE(data, isValidating);

	
	useEffect(() => {
		if(data){
			setPageInfo(prev => ({
				...prev, ...data?.data?.pageable, 
				totalElements: data?.data?.totalElements,
				page: data?.data?.number,
			}))
		}
	}, [data])
	 
 
	return {  loading: loading && !CACHE?.data , isValidating , beneficiaries: CACHE?.data?.content, error: error  && errorCode, mutate, pageInfo, setPageInfo };
};

 

 



export const useCreateBeneficiary = (destinationCountryId) => {
	const [loading, setLoading] = useState(false);
	const { postAxiosHandler } = useAxiosHandler();
	
	const handleCreateBeneficiary = async (DATA) => {
		setLoading(true);
		const { data } = await postAxiosHandler({
			url: `${BEEFICIARY_URL}/create-beneficiary`,
			DATA: {destinationCountryId, ...DATA}, 
			successMessage: "Beneficiary created successfully",
		});
		setLoading(false);
		if (data) return { data };
	};
	return { handleCreateBeneficiary, loading };
};



 






