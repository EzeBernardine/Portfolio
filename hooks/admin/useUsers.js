




 
import { UseContext } from "../../state/provider";
import { downloadJSONAsCSV, objIsEmpty } from "../../utils";
import { useCACHE } from "../../hooks/handlers/useCache";
import { useEffect, useState } from "react";
import { ADMIN_URL } from "../../constant/url";
import { useAxiosHandler, useGetCachedAxiosHandler } from "../useAxiosHandler";
import Notify from "../../application/notification";






 

export const useGetUsers = (_pageInfo, extraFilterString) => {
	const { state: { user, accessToken}} = UseContext()
	const [pageInfo, setPageInfo] = useState({
		page: 0,
		limit: 4,
		..._pageInfo
	})
	const { data , error, loading , mutate, isValidating, errorCode, responseCode} =   useGetCachedAxiosHandler({
		url: `${ADMIN_URL}/get-users?access_token=${accessToken}&pageNo=${pageInfo.page }&pageSize=${pageInfo.limit}${extraFilterString ? extraFilterString : ""}`,
		notify: false,
		requiredVariable: accessToken?.length > 0 && !objIsEmpty(user?.userCountry)
	});
	const {CACHE} = useCACHE(data, isValidating, +responseCode === 25);
	
	useEffect(() => {
		if(data){
			setPageInfo(prev => ({
				...prev, ...data?.data?.pageable, 
				totalElements: data?.data?.totalElements,
				page: data?.data?.number,
			}))
		}
	}, [data])
	 
	return {  loading: loading && !CACHE?.data , isValidating , users: CACHE?.data?.content, error: error  && errorCode, mutate, pageInfo, setPageInfo };
};

 

export const useGetUserByEmailAddress = (email, ) => {
 
	const { data , error, loading ,  isValidating, mutate} =   useGetCachedAxiosHandler({
		url: `${ADMIN_URL}/get-user-by-emailAddress/${email}`,
		notify: false,
		requiredVariable: email?.length > 0 
	});
	 
 
	return {  loading, isValidating , user: data?.data, error   , mutate };
};



export const useGetVerifiedAndUnverifiedUsers = (  extraFilterString) => {
	const [loading, setLoading] = useState(false);
	const { getAxiosHandler } = useAxiosHandler();
 
	const handleVerifiedAndUnverifiedUsers = async () => {
		setLoading(true);
		const { data ,  } = await getAxiosHandler({
			url: `${ADMIN_URL}/get-verified-and-unverified-users?pageSize=1000${extraFilterString ? extraFilterString : ""}`,
			notify: false,
		});
		setLoading(false);
		if (data) {
			if(data?.data?.data?.length > 0) {
				downloadJSONAsCSV(data?.data?.data)
				Notify().success("Users downloaded successfully")
			}else{
				Notify().error("There are currently no users")
			}
			return { data: data?.data };
		}
		error && Notify().error("Something went wrong")
	};
	return { handleVerifiedAndUnverifiedUsers, loading };
};


export const useCreateAdmin = ( ) => {
	const [loading, setLoading] = useState(false);
	const { postAxiosHandler } = useAxiosHandler();
 
	const handleCreateUser = async (DATA) => {
		setLoading(true);
		const { data ,  } = await postAxiosHandler({
			url: `${ADMIN_URL}/create-admin-user`,
			DATA,
			errorMessage: "Something went wrong",
			successMessage: "Admin created successfully"
		});
		setLoading(false);
		if (data) {
			return { data: data?.data };
		}
	};
	return { handleCreateUser, loading };
};


export const useUpdateUser = ( ) => {
	const [loading, setLoading] = useState(false);
	const { putAxiosHandler } = useAxiosHandler();

	const handleUpdateAdminUser = async (DATA) => {
		setLoading(true);
		const { data ,  } = await putAxiosHandler({
			url: `${ADMIN_URL}/update-user-info`,
			DATA,
			errorMessage: "Something went wrong",
			successMessage: "User updated successfully"
		});
		setLoading(false);
		if (data) {
			return { data: data?.data };
		}
	};
	return { handleUpdateAdminUser, loading };
};
