import { useEffect, useState } from "react";
import { ADMIN_URL, TRANSACTION_URL } from "../../constant/url";
import { UseContext } from "../../state/provider";
import { useAxiosHandler, useGetCachedAxiosHandler } from "../useAxiosHandler";
import { useCACHE } from "../handlers/useCache";

 


 




export const useGetAdminTransactions = (_pageInfo) => {
	const { state: {  accessToken}} = UseContext()
	const [pageInfo, setPageInfo] = useState({
		page: 0,
		limit: 10,
		..._pageInfo
	})
	const { data , error, loading, mutate , isValidating} =   useGetCachedAxiosHandler({
		url: `${TRANSACTION_URL}/get-transactions-for-admin?access_token=${accessToken}&pageNo=${pageInfo.page }&pageSize=${pageInfo.limit}`,
		notify: false,
		noToken: true,
		requiredVariable: accessToken?.length > 0  
	});
	const {CACHE} = useCACHE(data, isValidating);
	useEffect(() => {
		if(data){
			setPageInfo(prev => ({
				...prev, ...data?.data?.pageable, 
				totalElements: data?.data?.totalElements,
				totalPages: data?.data?.totalPages,
			}))
		}
	}, [data]) 
	return {   loading: loading && !CACHE?.data , transactions: CACHE?.data?.contents, error, mutate , isValidating , pageInfo, setPageInfo};
};



 
 

export const useGetAdminPieChart = ( ) => {
	const { state: {  accessToken}} = UseContext()
 
	const { data , error, loading, mutate , isValidating} =   useGetCachedAxiosHandler({
		url: `${TRANSACTION_URL}/get-pie-chart-info/YEAR?access_token=${accessToken}`,
		notify: false,
		noToken: true,
		requiredVariable: accessToken?.length > 0  
	});
 
	return {   loading, pieChart: data?.data, error, mutate, isValidating, };
};



 
 

export const useGetAdminBarChart = ( ) => {
	const { state: {  accessToken}} = UseContext()
 
	const { data , error, loading, mutate , isValidating} = useGetCachedAxiosHandler({
		url: `${TRANSACTION_URL}/get-bar-chart-info/1-YEAR?access_token=${accessToken}`,
		notify: false,
		noToken: true,
		requiredVariable: accessToken?.length > 0  
	});
 
	return { loading, barChart: data?.data, error, mutate , isValidating , };
};



export const useChangeTransactionStatus = () => {
	const [loading, setLoading] = useState(false);
	const { getAxiosHandler } = useAxiosHandler();
	
	const handleChangeTransactionStatus = async (transactionID, status, ) => {
		setLoading(true);
		const { data ,  } = await getAxiosHandler({
			url: `${ADMIN_URL}/transaction-change-status/${transactionID}/${status}`,
			successMessage: "Transaction status updated successfully"
		});
		setLoading(false);
		if (data) {
			return { data: data?.data };
		} 
	};
	return { handleChangeTransactionStatus, loading };
};

 