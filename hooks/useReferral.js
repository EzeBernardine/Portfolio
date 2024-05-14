import { useState } from "react";
import { FEE_URL, REFERRAL_URL,  } from "../constant/url";
import { UseContext } from "../state/provider";
import { objIsEmpty } from "../utils";
import { useAxiosHandler, useGetCachedAxiosHandler } from "./useAxiosHandler";







export const useGetReferralInfo = ( destinationCountryId ) => {
	const { state: { accessToken , user}} = UseContext()
	const { data , error, loading } =   useGetCachedAxiosHandler({
		url: `${REFERRAL_URL}/get-referral-info-by-countryId?countryId=${destinationCountryId}&access_token=${accessToken}`,
		notify: false,
		noToken: true,
		requiredVariable:  typeof(destinationCountryId)  === "number"  &&  accessToken?.length > 0 && !objIsEmpty(user?.userCountry)
	});
 
	return {   loading, referralInfo: data?.data, error  };
};

export const useGetReferralInfoByCountryId	 = (countryId) => {
	const { data , error, loading } =   useGetCachedAxiosHandler({
		url: `${REFERRAL_URL}/get-referral-info-by-countryId?countryId=${countryId}`,
		notify: false,
		requiredVariable: typeof(countryId) === "number"  
	});
 
	return {   loading, referralInfo: data?.data, error  };
};


 


export const useSetMinimumTransferValue = () => {
	const [loading, setLoading] = useState(false);
	const { postAxiosHandler } = useAxiosHandler();
	
	const handleSetMinimumTransferValue = async (DATA) => {
		setLoading(true);
		const { data } = await postAxiosHandler({
			url: `${FEE_URL}/setup-minimum-transferrable-fee`,
			DATA,
			successMessage: "Minimum value set successfully",
		});
		setLoading(false);
		if (data) return { data };
	};
	return { handleSetMinimumTransferValue, loading };
};



 
